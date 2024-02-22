import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";

function Main(props){
    const [newsArticles,setNewsItems] = useState();
    let array = [],count = 0,arr = [],max = 0;

useEffect(() => {
    const Newsdata = async () => {
        const api = `https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCategory}&apiKey=cc8c263b50d243d38038ea52bfe90d2b`;
        const res = await fetch(api);
        const result = await res.json();

        setNewsItems(result.articles);
    }
    Newsdata()
},[props.newsCategory])

    return(
      newsArticles ? (
            newsArticles.map((news, index) => {
              return <NewsItem key={index} news={news} />;
            })
          ) : (
            <div>Loading...</div>
          )
    )
  }

export default Main;