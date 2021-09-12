import React from 'react'
import Feed from '../../center/Feed';
import RightsideBar from '../../RightsideBar/RightSideBar';
 import SideBar from '../../SideBar/SideBar';
import "./Home.css";





export default function Home() {
    return (
        <div className="homeContent">
         
         <SideBar/>
         <Feed />
         <RightsideBar/>
         
        
           
        </div>
    )
}
