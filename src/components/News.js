import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
      super();
      console.log("hello i am constructor from News component");
      this.state = {
        articles:  [],
        loading: false
      }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf223813db5942a2a43a05298c7d88b0";
      let data = await fetch(url);
      let parsedData = await data.json();
        console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
  

  render() {
    return (
      <div className="container my-3">
        <h1>NewsTak - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={!element.urlToImage?"https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg":element.urlToImage} newsUrl={element.url} />
            </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
