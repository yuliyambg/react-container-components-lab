import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  getReview(){
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(resp => {
        this.setState({reviews: resp.results})

      })
  }

  render(){
    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          this.setState({
            'searchTerm': e.target.value
          })

          {
            this.getReview()
          }

        }}>
        <input />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
