import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="mx-2 lg:max-w-screen-xl lg:mx-auto"><Navbar></Navbar></div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
