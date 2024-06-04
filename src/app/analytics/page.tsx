import {  analytics } from "@/utils/analytics"
import AnalyticsDashbord  from "./AnalyticsDashbord"
import { getDate } from "date-fns"
import { pageviews } from "./data"
import { pageviews2 } from "./data2"
const pageview=async()=>{
  const TRACKING_DAYS=10
  // const pageviews=await analytics.retreiveDays("pageview",2)
  
 
  
  // const totalPageviews = pageviews.reduce((acc, curr) => {
  //   return (
  //     acc +
  //     curr.events.reduce((acc, curr) => {
  //       return acc + Object.values(curr)[0]!
  //     }, 0)
  //   )
  // }, 0)
  // console.log(totalPageviews)
  const avgVisitorsPerDay = (60 / TRACKING_DAYS).toFixed(1)
 
  // const amtVisitorsToday = pageviews
  //   .filter((ev) => ev.date === getDate())
  //   .reduce((acc, curr) => {
  //     return (
  //       acc +
  //       curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
  //     )
  //   }, 0)
  const amtVisitorsToday=4;
  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
      <AnalyticsDashbord 
          
        pageviews={pageviews}
        pageviews2={pageviews2}

        
        />
    </div>
      </div>
    
  )
}

export default pageview
