import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='font-jost'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
