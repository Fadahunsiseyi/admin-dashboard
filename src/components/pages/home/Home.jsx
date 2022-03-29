import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.scss'
import {userData} from '../../DummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

export default function Home() {
    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ], []
      )
      const [userStats, setUserStats] = useState([])
      console.log(setUserStats)
      useEffect(() =>{
        const getStats = async () =>{
          try {
          const res = await axios.get('/users/stats',{
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjUyM2MwZTNjZjQzZDQ5ZDYxMmI3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODQ2MTc1MiwiZXhwIjoxNjQ5ODQ0MTUyfQ.Jg8cbmlnPb1Wwx1KjnhmMCArIvxqTOmrCTA73A07N9A"
            }
          })
          console.log(res, 'the res!!!!!!!!!!!!!!!')
          // setUserStats(res.data)
          res.data.map((item) => setUserStats(prev => [...prev, {name: MONTHS[item._id - 1], "New User": item.total},
        ]))
        }
        catch(err){
          console.log(err, 'na the issue be this' )
        }
      } 
      getStats()
      },[MONTHS])
      console.log(userStats, 'the statistic')
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
