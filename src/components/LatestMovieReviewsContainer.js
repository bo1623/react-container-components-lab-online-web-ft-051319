import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vKwZuvuvDtDMONCAgn0XpWtLezGS9FuE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state={
      reviews:[]
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp=>resp.json())
    // .then(json=>console.log(json.results))
    .then(json=>this.setState({reviews: json.results}))
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
