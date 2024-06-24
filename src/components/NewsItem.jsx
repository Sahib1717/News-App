import React from "react";
import noImage from "../images/no-image.png";
const NewsItem = ({title,description,src,url}) => {
    
    return (
        <div className="card h-100" data-bs-theme="dark" style={{width: '18rem',height:'auto'}}>
  <img src={src || noImage} className="card-img-top" alt="..."/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{title}</h5>
    <p className="card-text flex-grow-1">{description}</p>
    <a href={url} className="btn btn-primary">Read News</a>
  </div>
</div>
    );
};
export default NewsItem;