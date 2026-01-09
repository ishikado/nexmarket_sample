import { NextResponse } from "next/server"
import { ItemModel } from "../../../utils/schemaModels"
import connectDB from "../../../utils/database"


export async function GET() {
  try {
    await connectDB()
    const allItems = await ItemModel.find()
    return NextResponse.json({message: "アイテム読み取り成功(all)", allItems: allItems})
  } catch (error) {
    return NextResponse.json({message: "アイテム読み取り失敗(all)"})
  }
}

