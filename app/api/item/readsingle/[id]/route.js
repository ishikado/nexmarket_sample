import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels" // 追加
import { use } from "react";

export async function GET(request, context){
  try{
    await connectDB()
    const unwrapParams = await context.params
    const singleItem = await ItemModel.findById(unwrapParams.id)
    return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem})
  }catch (error) {
    console.log(error)
    return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
  }
}
