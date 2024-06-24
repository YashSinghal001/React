import  'bootstrap/dist/css/bootstrap.min.css' 
import  'bootstrap/dist/js/bootstrap.bundle' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Carosuel } from './components/Carosuel'
import Alert from './components/Alert'
import Downlaod from './components/Downlaod'
import YourFlight from './components/YourFlight'
import AllOffers from './components/AllOffers'
import Welcome from './components/Welcome'
import Search from './components/Search'


function App() {
  return (
    <>
      <Navbar/>
      <Carosuel/>
     
     <Search/>
      <Welcome/>
      <AllOffers/>
      <Downlaod/>
      <Alert/>
      <YourFlight/>
       <Footer/>

   
    </>
  )
}

export default App
