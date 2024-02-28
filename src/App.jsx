import { useState } from 'react'
import Header from '../src/Component/Util/Header'
import Section from './Component/Util/Section'
import Footer from './Component/Util/Foorter'
import { Outlet } from 'react-router-dom'
import AboutStore from './Component/Private/Seller/AboutStore'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='gap-2'>
        <Header/>
        {/* <Section/> */}
        <Outlet/>
        <Footer/>
      </div>
    )
}

export default App
