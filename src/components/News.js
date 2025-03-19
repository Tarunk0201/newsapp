import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsTak - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
              <NewsItem title="my title" description="you know" imgUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description="you know" />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description="you know" />
            </div>
        </div>
      </div>
    )
  }
}

export default News
