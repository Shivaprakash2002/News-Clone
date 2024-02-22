import '../Styles/Navbar.css'

function Navbar(props){
    return(
        <>
        <div className="btns">
            <button className="general btn" onClick={() => props.setNewsCategory('general')}>General News</button>
            <button className="breaking btn" onClick={() => props.setNewsCategory('health')}>Health News</button>
            <button className="breaking btn" onClick={() => props.setNewsCategory('technology')}>Tech News</button>
            <button className="breaking btn" onClick={() => props.setNewsCategory('science')}>Science News</button>
    
        <div className="contact">
            <button className='btn contact'>Contact</button>
        </div>
        </div>
        </>
    )
}

export default Navbar;