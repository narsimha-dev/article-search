import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup } from 'reactstrap';
import { loagNewsObject, filterItems, searchText } from '../redux/actions/newsAction';
import NewsCardView from './NewsCardView';
import FilterNewsDroupDown from './FilterNewsDroupDown';
import customeDate from './customeDate';


class SeachBar extends Component {
  //fetching all news JSONP object
  componentDidMount() {
    this.props.dispatch(loagNewsObject())
  }
  // input searchText added store
  search = (e) => {
    this.props.dispatch(searchText(e.target.value))
  }
  render() {
    const { articles } = this.props.news;
    const names = articles && articles.map(item => {
      return [ //serch by author, publishedDate, siteLink 
        {
          key: item.author,
          value: item.author
        },
        {
          key: customeDate(item.publishedAt),
          value: customeDate(item.publishedAt)
        },
        {
          key: item.source.name,
          value: item.source.name
        }
      ]
    });
    return <div className="container">
      {!this.props.isLoading ? <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
        : <>
        <FormGroup row>
          <Col sm={10}>
            {this.load(names)}
            <input type="text" placeholder="Search..." value={this.props.searchText} onChange={(e) => this.search(e)} />
          </Col>
          <Col><FilterNewsDroupDown /></Col>
        </FormGroup>
          <br /><br />
          <NewsCardView articles={articles} />
        </>
      }
    </div>
  }
  load = (names) => {
    this.props.dispatch(filterItems(names));
  }
}

function mapStateToProps(state) {
  return {
    "news": state.allNews,
    "isLoading": state.isLoading,
    "searchText": state.searchText
  };
}
export default connect(mapStateToProps)(SeachBar);