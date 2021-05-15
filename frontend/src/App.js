import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Route path='/' exact component={HomeScreen} />
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
