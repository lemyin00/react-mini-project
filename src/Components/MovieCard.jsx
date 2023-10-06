import React from 'react'
import {Badge} from 'react-bootstrap' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const MovieCard = ({ movie }) => {

  const {genreList} = useSelector((state)=>state.movie)
  console.log('[Moviecard.js]', genreList)


  const styled = {
    backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}')`,
  };


  return (
    <div style={styled} className='movie-card'>
      <Link to={`/movies/${movie.id}`}>
      <div className='overlay'>
        <h1>{movie.title}</h1>
        <div className='genres'>
          {movie.genre_ids.map((id)=>(
            <Badge bg='danger' key={id} className='info'>
              {/* find(): 일치한 정보 중 첫번째 요소만 반환하는 함수 */}
            {genreList.find((item)=>item.id===id).name}
            </Badge>
          ))}
        </div>
        <div>
        <span>{`평점:${movie.vote_average}점`}</span>
        <span>|</span>  
        <span>{movie.adult?'청불':'청소년관람'}</span>
        </div> 
  </div>
  </Link>
</div>
  )
}

export default MovieCard