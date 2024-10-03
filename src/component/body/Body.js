import React from 'react'
import Wach from "./wach/Wach"
import Iphon15pro from "./iphon15pro/Iphon15pro"
import Iphon15 from "./iphon15/Iphon15"
import Smalers from './smolers/Smalers'
import Youtube from './youtube/Youtube'
import Slayder from './slayder/Slayder'
function Body() {
  return (
    <div>
    <Iphon15pro/>
    <Iphon15 />
    <Wach />
    <Smalers/>
    <Slayder/>
    <Youtube/>
    
    </div>
  )
}

export default Body