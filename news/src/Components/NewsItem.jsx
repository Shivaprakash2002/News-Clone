import image from '../assets/image.jpg';
import '../Styles/Navbar.css'

function NewsItem(props){
     return(
        <>
        <div className="card p-2 mx-4 d-inline-block" style={{width : "18rem"} }>
         <img src={props.news.urlToImage ? props.news.urlToImage : image} className="card-img-top" alt="..." style={{width : "100%" , height : "200px"}}/>
          <div className="card-body">
          <h5 className="card-title">{props.news.title ? props.news.title : 'Lorem, ipsum.'}</h5>
            <p className="card-text">{props.news.description}</p>
             <a href={props.news.url} className="btn btn-primary" target="_blank">view news</a>
           </div>
        </div>
        </>
     )
}

export default NewsItem;