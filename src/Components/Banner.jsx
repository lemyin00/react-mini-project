import React from 'react'

const Banner = ({movie}) => {
    console.log('[Banner.jsx]:', movie);
    
    const div_style = {
        backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path})`
    }
  return (
    <div style={div_style} className ='banner'>
    <div className='banner-info'>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        </div>
    </div>   
  )
}

export default Banner