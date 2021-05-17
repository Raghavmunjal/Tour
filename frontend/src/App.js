import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import PackageScreen from './Screens/PackageScreen.js'
import ServiceScreen from './Screens/ServiceScreen'
import BookingScreen from './Screens/BookingScreen'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/package' exact component={PackageScreen} />
          <Route path='/services' exact component={ServiceScreen} />
          <Route path='/book' exact component={BookingScreen} />
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
