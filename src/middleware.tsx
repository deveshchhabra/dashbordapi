// import {NextRequest, NextResponse} from "next/server";
// import { analytics } from "./utils/analytics";
 
// export default async function middleware(req:NextRequest) {
//   if(req.nextUrl.pathname ==="/"){
//     try{
//         //api req        //namespace //metadata
//         analytics.track('contact',{
//             page:"/",
//             country:req.geo?.country,
//         }
//         )

//   }
//   catch(err){
//     console.error(err+"uu")
//   }
// }
//   return NextResponse.next()
// }
// export const matcher={
//     matcher:["/"],
// }