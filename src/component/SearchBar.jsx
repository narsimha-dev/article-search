import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row,Col} from 'reactstrap';
import ReactSearchBox from 'react-search-box'
import {loagNewsObject, search} from '../redux/actions/newsAction';
import NewsCardView from './NewsCardView';
import FilterNewsDroupDown from './FilterNewsDroupDown';
import { IoIosSearch } from "react-icons/io";


class SeachBar extends Component {

  componentDidMount() {
    this.props.dispatch(loagNewsObject())
  }
  
  search=(e)=>{
    // const data=articles.filter(name =>(name.author || name.source.name) === e.target.value.toLowerCase())
    // console.log("object: ", data)


  }
  render() {
    const {articles} = this.props.news;
    const names= articles && articles.map(item=>{
     return [ //serch by author, publishedDate, siteLink 
        {
        key:item.author,
        value:item.author
        },
        {
          key:this.customeDate(item.publishedAt),
          value:this.customeDate(item.publishedAt)
        },
        {
          key:item.source.name,
          value:item.source.name
        }
      ]
    });
    //console.log("object: ", names);
    return (
      <>
      <div className="container">
        <Row>
          <Col sm={7}>
            {console.log(names)}
            <ReactSearchBox placeholder="&#xF002" value={names} data={names} callback={record => console.log(record)}/>
          </Col>
          <Col sm={3}>
            <FilterNewsDroupDown/>
            </Col>
            </Row>
            <br/><br/>
          <NewsCardView articles={articles}/>
          </div>  
          </>
    );
  }
  load=()=>{
return  this.props.articles && this.props.articles.map(item=>{
  return [ //serch by author, publishedDate, siteLink 
     {
     key:item.author,
     value:item.author
     },
     {
       key:this.customeDate(item.publishedAt),
       value:this.customeDate(item.publishedAt)
     },
     {
       key:item.source.name,
       value:item.source.name
     }
   ]
 });
  }
  customeDate = (publishwdDate) => {
    const date = new Date(publishwdDate);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + "/" + month + "/" + year;
  }
} 

function mapStateToProps(state) {
  const { items, searchText } = state.searchSimple;
  return {
      filteredItems: items.filter((item) => item.startsWith(searchText)),
      "news": state.allNews,
        "isLoading":state.isLoading
  };
}
export default connect(mapStateToProps)(SeachBar);