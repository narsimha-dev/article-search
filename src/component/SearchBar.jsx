import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'reactstrap';
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

      <div className="row">
        <div className="col-sm-8">{!this.props.isLoading ? <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
          : <>
            {this.load(names)}
            <Form>
            <Input type="text" placeholder="Search..." value={this.props.searchText} onChange={(e) => this.search(e)} />
            </Form>
            <br /><br />
            <NewsCardView articles={articles} />
          </>
        }</div>
        <div className="col-sm-4"><FilterNewsDroupDown /></div>
      </div>




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