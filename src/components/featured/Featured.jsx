import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({type}) {

  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie"? "Movies":"TV Shows"}</span>
                <select name="genre" id="genre">
                    <option value="">Genres</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div> 
        )}
        <img src="https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/pxzr4hqfklhsuhfda55w/andrew-tate" alt="" />
        <div className="info">
            <img src="https://e1.pngegg.com/pngimages/39/903/png-clipart-vikings-serie-folders-vikings-logo-thumbnail.png" alt="logo" />
            <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nobis veniam repudiandae eius, excepturi aliquid esse suscipit maxime ipsum quaerat.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
