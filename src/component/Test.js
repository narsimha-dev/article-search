import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactSearchBox from 'react-search-box'

 class Test extends Component {
  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  render() {
    
    const {articles} = this.props.news;
    console.log("=====:,", articles)
    return (
      // <ReactSearchBox placeholder="Placeholder" value="Doe" data={this.data}  callback={record => console.log(record)}/>
      <ReactSearchBox placeholder="Search" value="Doe" data={this.data}  callback={record => console.log(record)}/>

    )
  }
}

function mapStateToProps(state) {
  return { "news": state.allNews,
          "isLoading":state.isLoading};
  }
  export default connect(mapStateToProps)(Test);