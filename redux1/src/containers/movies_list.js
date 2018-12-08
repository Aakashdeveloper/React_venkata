import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from '../components/header'

class MoviesList extends Component {

  componentWillMount(){
    this.props.moviesList()
  }

  renderList = (movies) => {
    if(movies){
      return movies.map((data) => {
        return(
          <div>{data.name}</div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    movies:state.movies
  }
}

export default connect(mapStateToProps,actions)(MoviesList);
