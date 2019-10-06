import React from 'react';
// import {Router,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class NewsCardView extends React.Component {


    render() {
        const { articles } = this.props;
        const data = articles.map((article, id) => {
            return <Card key={id}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.customeDate(article.publishedAt)}</CardTitle>
                    <CardSubtitle>{article.author}</CardSubtitle>
                    <CardText>{article.content}</CardText><br />
                    <CardSubtitle>{article.source.name}</CardSubtitle>
                        {/* <Router>
                            <Link to={article.source.name}/>
                            </Router>
                            </CardSubtitle> */}
                    <Button>Narsimha</Button>
                </CardBody>
            </Card>
        })

        return (
            <div>
                {data}
            </div>
        );
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
};
const mapStateTOProps = (articles) => {
    return articles;
}
export default connect(mapStateTOProps)(NewsCardView);