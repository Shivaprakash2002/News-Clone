import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";

function Main(props){
    const [newsItems,setNewsItems] = useState([]);

useEffect(() => {
    const Newsdata = async () => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCategory}&apiKey=cc8c263b50d243d38038ea52bfe90d2b`);
        const result = await res.json();
        console.log(result,'1545445');

        setNewsItems(result.articles);
    }
    Newsdata();
},[props.newsCategory])
    return(
        newsItems.map((news,index) => {
           return <NewsItem key={index} news={news} />
        })
    )
}

export default Main;