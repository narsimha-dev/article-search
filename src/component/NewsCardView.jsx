import React from 'react';
import { connect } from 'react-redux';
import '../css/style.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import customeDate from './customeDate';

class NewsCardView extends React.Component {

    formatImageUrl = (url) => {
        const width = '100%'
        const height = '100%'
        return url.replace('{width}', width).replace('{height}', height)
    }  
// iterate list of news articles objects
    render() {
        const { articles, searchText } = this.props;
        const data = articles && articles
        // .filter(article => {
        //     return (
        //         article.author.searchText && searchText.toLowerCase()0
                // article.source.name.toLowerCase().indexOf(searchText.toLowerCase()) >=0 ||
                // this.customeDate(article.publishedAt).indexOf(searchText) >=0
        //     )
        // })
            .map((article, id) => {
                return <div className="container" key={id}>
                    {article.urlToImage &&
                        <Card className="custome card">
                            <CardImg className="imageView" top width="100%" src={this.formatImageUrl(article.urlToImage + "?mocky-delay=100ms")} alt={article.source.name} />
                            <CardBody className="">
                                <CardTitle className="publishedAt">{customeDate(article.publishedAt)}</CardTitle>
                                <CardSubtitle className="author"><b>{article.author}</b></CardSubtitle>
                                <CardText className="content">{article.content}</CardText><br />
                                <a href={article.url}><u>{article.source.name}</u></a>
                            </CardBody>
                        </Card>
                    }
                    <br />
                </div>
            })
//  dynamically card view dispaly
        return (
            <div>
                {data} 
                <br />
            </div>
        );
    }
};
//getting from strore props
const mapStateTOProps = (articles) => {
    return articles;
}
export default connect(mapStateTOProps)(NewsCardView); //connecct store