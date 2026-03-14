import { useState } from 'react'
import logo from './assets/IPL.png';
import video from './assets/videoplayback.mp4'
import './App.css'
import Countdown from './Countdown.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
    <section className='relative h-screen flex flex-col overflow-hidden'>
      <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
        <source src={video} type='video/mp4'></source>
      </video>
      <nav className='flex justify-around mt-2 items-center fixed w-full bg-[url(/12301.jpg)]'>
        <div className="logo">
          <img src={logo} className='w-60 h-auto cursor-pointer'></img>
        </div>
        <div className="navigation flex scale-y-140">
          <h1 className='font-bold text-4xl text-blue-400/60 hover:text-blue-500 relative
             after:absolute after:left-0 after:bottom-[-3px] after:h-[5.5px] after:w-0
             after:bg-blue-500/90 after:transition-all after:duration-300 hover:after:w-full
             transition-colors duration-300 cursor-pointer mr-6 select-none'>AUCTION</h1>
          <h1 className='font-bold text-4xl text-blue-400/60 hover:text-blue-500 relative
             after:absolute after:left-0 after:bottom-[-3px] after:h-[5.5px] after:w-0
             after:bg-blue-500/90 after:transition-all after:duration-300 hover:after:w-full
             transition-colors duration-300 cursor-pointer mr-6 select-none'>TEAMS</h1>
          <h1 className='font-bold text-4xl text-blue-400/60 hover:text-blue-500 relative
             after:absolute after:left-0 after:bottom-[-3px] after:h-[5.5px] after:w-0
             after:bg-blue-500/90 after:transition-all after:duration-300 hover:after:w-full
             transition-colors duration-300 cursor-pointer mr-6 select-none'>FIXTURE</h1>
          <h1 className='font-bold text-4xl text-blue-400/60 hover:text-blue-500 relative
             after:absolute after:left-0 after:bottom-[-3px] after:h-[5.5px] after:w-0
             after:bg-blue-500/90 after:transition-all after:duration-300 hover:after:w-full
             transition-colors duration-300 cursor-pointer mr-6 select-none'>SHOP</h1>
          <h1 className='font-bold text-4xl text-blue-400/60 hover:text-blue-500 relative
             after:absolute after:left-0 after:bottom-[-3px] after:h-[5.5px] after:w-0
             after:bg-blue-500/90 after:transition-all after:duration-300 hover:after:w-full
             transition-colors duration-300 cursor-pointer select-none'>LOG IN</h1>
        </div>
      </nav>
      <main className='flex-1 flex justify-center items-center'>
        <div className='text-6xl font-black tracking-tight leading-none scale-y-170 select-none text-red-800'>
          <span className='text-gray-300'>NEXT SEASON AWAITS IN THE CORNER!</span>
          <br></br>
          {/* <Countdown className='text-5xl'/> */}
        </div>
        <div className='flex'>
        </div>
      </main>
    </section>
    <div className='h-screen'>
      <h1>Teams</h1>
    </div>
    </div>
    </>
  )
}

export default App
