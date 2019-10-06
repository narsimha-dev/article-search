import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row,Col} from 'reactstrap';
import {loagNewsObject, search} from '../redux/actions/newsAction';
import NewsCardView from './NewsCardView';
import FilterNewsDroupDown from './FilterNewsDroupDown';

class SearchBar extends Component {

  componentDidMount() {
    this.props.dispatch(loagNewsObject())
  }
  render() {
    const {articles} = this.props.news;

    return (
      <>
        <Row>
          <Col sm={7}><input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => this.props.dispatch(search(e.target.value))}
          value={articles} />
          </Col>
          <Col sm={3}>
            <FilterNewsDroupDown/>
            </Col>
            </Row>
            <br/><br/>
          <NewsCardView articles={articles}/>  
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