import React from 'react'
import Feature from '../../components/features/Feature'
import Chart from '../../components/Chart/Chart'
import xAxisData from '../../datas'

import './Home.css'
export default function Home() {
  return (
    <div className='home'>
      <Feature/>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"/>
    </div>
  )
}
