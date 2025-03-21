import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps = {
      pageSize: 6,
      category: "general",
    }

    static propTypes = {
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    constructor() {
      super();
      this.state = {
        articles:  [],
        loading: false,
        page: 1
      }
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cf223813db5942a2a43a05298c7d88b0&page=1&pageSize=${this.props.pageSize}`;

      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
        console.log(parsedData);
      this.setState({articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    handleLastClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cf223813db5942a2a43a05298c7d88b0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
      
    }
    handleNextClick = async () => {

      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cf223813db5942a2a43a05298c7d88b0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
    }
  

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsTak - Top Headlines</h1>
      {this.state.loading && <Spinner />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={!element.urlToImage?"https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg":element.urlToImage} newsUrl={element.url} />
            </div>
            })}
        </div>
        <div className='coantainer'>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-primary mx-3" type="button" onClick={this.handleLastClick} > &larr; Last</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary mx-3" type="button" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}

export default News
