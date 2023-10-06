import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Badge} from 'react-bootstrap' 
import axios from '../api'

// /movies/1-> useParams()
// /movies?id=1 -> useSearchParams()
const MovieDetail = () => {
  const{id} = useParams() 
  // console.log('[MovieDetail.js]:',id)

  const[movieDetail, setMovieDetail] = useState(null)
  const[reviews, setReviews] = useState([])

  const getMoviedetail = async () => {
    let res = await axios(`/movie/${id}?language=ko`)
    console.log('[MovieDetail.js]', res.data);
    setMovieDetail(res.data)
  }

  const getreviews = async () => {
    let res = await axios(`/movie/${id}/reviews?language=en-US&page=1`)
    console.log(res.data)
    setReviews(res.data.results);
  }
  useEffect(()=>{getMoviedetail();
  getreviews();
},[])
  return (
    <div>
      {movieDetail ? (
        <>
          <div className="container movie-details">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                alt="img"
              />
            </div>
            <div className="info">
              <div className="genre">
                {movieDetail.genres.map((item) => (
                  <Badge bg="danger" key={item.id}>
                    {item.name}
                  </Badge>
                ))}
              </div>
              <h1>{movieDetail.title}</h1>
              <h4>{movieDetail.tagline}</h4>
              <div>
                <span>{movieDetail.release_date}</span>
                <span>{movieDetail.runtime}분</span>
                <span>평점: {movieDetail.vote_average}점</span>
                <span>{movieDetail.adult ? "청불" : "18세 미만"}</span>
              </div>
              <div className="overview">{movieDetail.overview}</div>
            </div>
          </div>
          {/* 리뷰 영역 */}
        </>
      ) : (
        <div>....</div>
      )}
      <div className="container review-box">
        {reviews.map((item) => (
          <div className="review-item" key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default MovieDetail