import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels" 

export async function PUT(request, context){
    const reqBody = await request.json() 
    try{
      await connectDB()
      const unwrapParams = await context.params
      const singleItem = await ItemModel.findById(unwrapParams.id)
      if(singleItem.email == reqBody.email) {
        await ItemModel.updateOne({_id: unwrapParams.id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
      } else {
        return NextResponse.json({message: "他の人が作成したアイテムです"})
      }
    }catch (error) {
      console.log(error)
      return NextResponse.json({message: "アイテム編集失敗"})
    }
}
