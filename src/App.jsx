// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Navigate, BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeView from './views/HomeView.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
    
  <BrowserRouter>
      <Nav></Nav>
  <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/wiki_ideas_front/" element={<Navigate to="/"/>}/>
            {/* <Route path="/articles" element={<ArticlesView/>}/>
            <Route path="/articles/:id" element={<ArticleView/>}/>
            <Route path="/edit/:id" element={<Edit/>}/> */}
            {/* <Route path="*" element={<HomeView/>}/> */}
            
          </Routes>
          <Footer></Footer>
  </BrowserRouter>
    </>
  )
}

export default App
