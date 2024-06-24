import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css"
        
const NewsBoard = () => {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    },[])
    return (
        <div className="container-fluid  bg-dark"> 
            <h2 className="text-center mt-4">
                <span className="text-white">Latest </span><span className="badge bg-danger">News</span>
            </h2>
            <div className="row">
                {articles.map((news, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={news.source.id || index}>
                        <NewsItem
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NewsBoard;