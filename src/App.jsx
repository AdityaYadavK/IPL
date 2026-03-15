import logo from './assets/IPL.png';
import video from './assets/videoplayback.mp4'
import Champions from './assets/ChampionRCB.jpg'
import './App.css'
import bgimage from './assets/12301.jpg'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <>
    <div className='flex flex-col'>
    <section className='relative h-screen flex flex-col overflow-hidden'>
      <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
        <source src={video} type='video/mp4'></source>
      </video>
      <nav className='flex justify-around items-center fixed w-full bg-black  z-50'>
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
        <div className='px-6 text-center text-6xl font-black tracking-tight leading-none scale-y-170 select-none text-red-800 md:text-6xl'>
          <span className='text-white'>NEXT SEASON AWAITS!</span>
        </div>
        <nav
          className='social absolute bottom-0 flex w-full bg-black items-center justify-around p-14'
          /*style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.72)), url(${bgimage})` }}*/>
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
    <section className="relative h-screen flex items-center justify-center p-8 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-400 blur-3xl"></div>

  <div className="relative">
    <img src={Champions} className="w-screen h-auto rounded-3xl" />
    <div className="absolute inset-0 flex flex-col justify-center text-8xl font-bold text-yellow-200 [text-shadow:4px">
      <span className="absolute left-10 bottom-40 scale-y-120">Royal</span>
      <span className="absolute left-10 bottom-20 scale-y-120">Challengers</span>
      <span className="absolute left-10 bottom-0 scale-y-120">Bengaluru</span>
    </div>
  </div>

</section>
    </div>
    </>
  )
}

export default App
