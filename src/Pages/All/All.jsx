import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Posts } from '../../Components'
const All = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <Posts/>
    </div>
  )
}

export default All