import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Reviews from './components/Reviews'
import { useState } from "react";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [reviews, setReviews] = useState([])

  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/reviews' element={<Reviews reviews={reviews} setReviews={setReviews}/>}/>
      </Routes>
    </>
  )
}

export default App
