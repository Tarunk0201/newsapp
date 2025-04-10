import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
    <div className='my-3'>
      <div className="card" >
        <img src={imgUrl} className="card-img-top" style={{width: "100%", height: "250px"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btm-sm btn-primary" >Read More</a>
        </div>
      </div>
    </div>
    )
  }
}

export default NewsItem
