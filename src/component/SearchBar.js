import React, { Component } from 'react';
//import Axios from 'axios';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

import {loagNewsObject, search} from '../redux/actions/newsAction';
import NewsCardView from './NewsCardView';

class SearchBar extends Component {
 
  handleclick=()=>{
    this.props.dispatch(loagNewsObject())
  }
  render() {
    const {articles,totalResults} = this.props.news;
console.log(totalResults)
    return (
      <>
        <input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => this.props.dispatch(search(e.target.value))}
          value={articles} />
          <Button color="success" onClick={this.handleclick}>GET NEWS</Button>
     {this.props.isLoading && <NewsCardView articles={articles}/> } 
          </>
    );
  }
} 

function mapStateToProps(state) {
return { "news": state.allNews,
        "isLoading":state.isLoading};
}

// function mapDispatchToProps(dispatch) {
//   return getObject({search}, dispatch);
// }

export default connect(mapStateToProps)(SearchBar);