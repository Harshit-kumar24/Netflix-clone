import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import videoplayback from "./resources/videoplayback.mp4"

function Watch() {
  return (
    <div className='watch'>
      <div className="back">
            <ArrowBackOutlinedIcon className='icon'/>
            Home
      </div>
      <video className='video' 
        autoPlay
        progress
        controls
        src ={videoplayback}/>
    </div>
  )
}

export default Watch
