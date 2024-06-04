"use client"
import React from 'react'
import { BarChart, Card} from '@tremor/react'
// import { analytics } from '@/utils/analytics'

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string
  amtVisitorToday:number
  timestamp:'YYYY-MM-DDTHH:mm'
  
  // pageviews: Awaited<ReturnType<typeof analytics.retreiveDays>>
  // pageviews2: Awaited<ReturnType<typeof analytics.retreiveDays>>
}
// {}:AnalyticsDashbordprops
 // @ts-ignore
const AnalyticsDashbord = ({avgVisitorsPerDay,  pageviews, pageviews2 , timestamp}:AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6 ">
    <div className="grid w-full mx-auto  grid-cols-1 sm:grid-cols-2 gap-6">
      
      <Card className='w-full mx-auto max-w-x5'>
        <p className='text-tremor-default text-dark-tremor-content'> ET SCAN Suspicious inbound to MSSQL port 1433</p>
        {  pageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
              // @ts-ignore

            data={  pageviews.map((day) => ({
              // @ts-ignore
              name: day.timestamp,
              
              // @ts-ignore
              BadApi:day.src_port
            }))}
            categories={['BadApi']}
            index='name'
          />
        ) : null}
      </Card>
      
      <Card>
      <p className='text-tremor-default text-dark-tremor-content'> "ET SCAN Suspicious inbound to MSSQL port 1477"</p>
        {  pageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
              // @ts-ignore

            data={  pageviews.map((day) => ({
              // @ts-ignore
            
              name: day.timestamp,
              
             
              // @ts-ignore
             
              BadApi:day.src_port
            }))}
            categories={['BadApi']}
            index='name'
          />
        ) : null}
      </Card>
      <Card>
      <p className='text-tremor-default text-dark-tremor-content'> "ET SCAN Suspicious inbound to MSSQL port 1454"</p>
        {  pageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
              // @ts-ignore

            data={  pageviews2.map((day) => ({
              // @ts-ignore

              name: day.timestamp,
              
              // @ts-ignore
    
              MiscAttack:day.src_port
            }))}
            categories={['MiscAttack']}
            index='name'
          />
        ) : null}
      </Card>
     
    </div>
    </div>
  )
}
export{}
export default AnalyticsDashbord
