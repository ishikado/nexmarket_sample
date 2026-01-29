import { NextResponse } from "next/server"
import { jwtVerify } from "jose"


export async function middleware(request) {
  
  //const token = await request.headers.get("Authorization")?.split(" ")[1]
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFAYi5jb20iLCJleHAiOjE3Njk3ODUzNjR9.GGCWJVEBu64xJAlyYbdJHU2DAhpwP8-h2Ji5J14vPLw"

  if(!token) {
    return NextResponse.json({message: "トークンがありません"})
  }

  try {
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)
    //console.log("decodedJwt:", decodedJwt) // 追加
    return NextResponse.next()
  } catch {
    return NextResponse.json({message: "トークンが正しくないのでログインしてください"})
  }
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}
