import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div className='font-jost'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        {/* <ToastContainer></ToastContainer> */}
      </div>
    </>
  )
}

export default App
