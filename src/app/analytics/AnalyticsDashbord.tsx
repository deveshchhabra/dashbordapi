"use client"
import React from 'react'
import { BarChart, Card} from '@tremor/react'
import { analytics } from '@/utils/analytics'

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string
  amtVisitorToday:number
  pageviews: Awaited<ReturnType<typeof analytics.retreiveDays>>
  pageviews2: Awaited<ReturnType<typeof analytics.retreiveDays>>
}
// {}:AnalyticsDashbordprops
const AnalyticsDashbord = ({avgVisitorsPerDay,  pageviews, pageviews2 }:AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6 ">
    <div className="grid w-full mx-auto  grid-cols-1 sm:grid-cols-2 gap-6">
      
      <Card className='w-full mx-auto max-w-x5'>
        <p className='text-tremor-default text-dark-tremor-content'> ET SCAN Suspicious inbound to MSSQL port 1433</p>
        {  pageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
            data={  pageviews.map((day) => ({
              name: day.timestamp,
              
             
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
            data={  pageviews.map((day) => ({
              name: day.timestamp,
              
             
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
            data={  pageviews2.map((day) => ({
              name: day.timestamp,
              
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
export default AnalyticsDashbord
