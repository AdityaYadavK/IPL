import logo from './assets/IPL.png';
import video from './assets/videoplayback.mp4'
import Champions from './assets/ChampionRCB.jpg'
import rcb from './assets/rcb.png'
import csk from './assets/csk.webp'
import mi from './assets/mi.webp'
import kkr from './assets/kkr.webp'
import srh from './assets/srh.webp'
import dc from './assets/dc.webp'
import lsg from './assets/lsg.webp'
import gt from './assets/gt.webp'
import rr from './assets/rr.png'
import pbks from './assets/pbks.webp'


import './App.css'
import bgimage from './assets/12301.jpg'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

function App() {
  const teamLogos = [
    { src: rcb, alt: 'RCB logo', name: 'Royal Challengers Bengaluru' },
    { src: csk, alt: 'CSK logo', name: 'Chennai Super Kings' },
    { src: kkr, alt: 'KKR logo', name: 'Kolkata Knight Riders' },
    { src: lsg, alt: 'LSG logo', name: 'Lucknow Super Giants' },
    { src: srh, alt: 'SRH logo', name: 'Sunrisers Hyderabad' },
    { src: gt, alt: 'GT logo', name: 'Gujarat Titans' },
    { src: dc, alt: 'DC logo', name: 'Delhi Capitals' },
    { src: pbks, alt: 'PBKS logo', name: 'Punjab Kings' },
    { src: rr, alt: 'RR logo', name: 'Rajasthan Royals' },
    { src: mi, alt: 'MI logo', name: 'Mumbai Indians' }
  ];

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
    <section className='h-screen bg-slate-950 px-6 flex items-center justify-center'>
      <div className='mx-auto grid w-fit grid-cols-5 grid-rows-2 place-items-center gap-3'>
        {teamLogos.map((team) => (
          <div
            key={team.alt}
            className='cursor-pointer group relative flex h-52 w-64 flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200/15 bg-gradient-to-b from-slate-800/95 via-slate-900/95 to-slate-950 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(2,6,23,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-300/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_22px_42px_rgba(14,165,233,0.24)]'
          >
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(56,189,248,0.2),transparent_52%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100'></div>
            <div className='pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent'></div>
            <img
              src={team.src}
              alt={team.alt}
              className='relative z-10 h-40 w-full object-contain drop-shadow-[0_12px_16px_rgba(2,6,23,0.65)] transition-transform duration-300 ease-out group-hover:scale-110'
            />
            <p className='relative z-10 mt-2 text-center text-xs font-semibold uppercase tracking-[0.13em] text-slate-100 group-hover:text-sky-100'>
              {team.name}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
  )
}

export default App
