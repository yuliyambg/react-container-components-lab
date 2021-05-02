// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {

  const rs = reviews.map((review) => {
    return (
      <div className={"review"} key={review.headline}>
        <h1>{review.headline}</h1>
        </div>
    )
  })


  return <div className={"review-list"}>
    { rs }
  </div>

}

export default MovieReviews;
