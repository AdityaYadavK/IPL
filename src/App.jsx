import { useState } from 'react'
import logo from './assets/IPL.png';
import video from './assets/videoplayback.mp4'
import Champions from './assets/ChampionRCB.jpg'
import './App.css'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
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
      <nav className='flex justify-around items-center fixed w-full bg-black p-2 z-50'>
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
          <span className='text-white'>NEXT SEASON AWAITS!</span>
          <br></br>
        </div>
        <nav className='flex justify-around items-center w-full bg-black p-14 absolute bottom-0 social'>
          <div className="flex items-center gap-6 text-white text-3xl">
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-600" />

            <span className='text-gray-400 text-2xl'>|</span>
            <span className='text-2xl tracking-widest select-none'>IPLT20</span>
          </div>
        </nav>
      </main>
    </section>
    <div className='h-screen'>
      {/* <h1 className='text-6xl text-yellow-200  select-none text-center champion mb-3'>meet your champions</h1> */}
      <div>
      <div className="logo">
          <img src={Champions} className='w-screen h-auto cursor-pointer'></img>
        </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default App
