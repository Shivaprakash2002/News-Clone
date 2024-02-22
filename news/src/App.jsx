import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  const [newsCategory,setNewsCategory] = useState("")

  return (
    <>
     <Navbar setNewsCategory={setNewsCategory}/>
     <Main newsCategory={newsCategory}/>
    </>
  )
}

export default App;
