import React, { useEffect, useState } from "react";
import NewsDisplay from "./NewsDisp";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import video1 from './Videos/v1.mp4'

const Hackathons = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f8abaddf6912444c93f89df0804818f3&page=1&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)

  }

  useEffect(() => {
    document.title = `CodexHub - ${capital(props.category)}`;
    update();
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}
    &apiKey=b30fab9fa58541b591608873b8d6cd84&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <div className="newsvideo pt-3" style={{ margin: "0px", padding: "0px" }}>
      <video src={video1} autoPlay loop muted className="my-0" style={{ margin: "0px", paddingTop: "0px" }} />
      <h1 className="text-center" style={{ margin: "34px 0px", marginTop: '90px', color: props.mode === "dark" ? "yellow" : "yellow", fontWeight: "700", textShadow: "0px 0px 7px rgba(255,255,255,0.3)" }}>
        TECH NEWS
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >

        <div className="container">
          <div className="row my-4 m-auto">
            {articles.map((element) => {
              return <div className="col md-4" key={element.url}>
                <NewsDisplay title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  hid={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}

Hackathons.defaultProps = {
  pageSize: 20,
  category: "general",
};
Hackathons.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Hackathons;
