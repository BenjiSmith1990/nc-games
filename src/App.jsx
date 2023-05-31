import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Reviews from './components/Reviews'
import { useState, useEffect } from "react";
import Categories from './components/Categories'
import { fetchReviews } from './apiCalls/apiCalls'
import { UserContext } from './context/UserContext'
import SinlgeReview from './components/SingleReview'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({username: 'Ben', isLoggedIn: true})
  const [reviews, setReviews] = useState([])



  useEffect(() => {
    fetchReviews().then(({reviews}) => {
        setReviews(reviews)
    })
}, [])

  return (
    <>
    <UserContext.Provider value={isLoggedIn}>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/reviews' element={<Reviews reviews={reviews} setReviews={setReviews}/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/reviews/:review_id' element={<SinlgeReview />}/>
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
