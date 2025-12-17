import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {


  return (
    <section className="min-h-screen bg-slate-950 text-white overflow-hidden ">
      <div className='flex flex-col gap-15 items-center justify-center'>
        <div className='flex flex-row gap-3'>
          <img src='reactLogo' className='h-5 w-5'></img>
          <span className='text-xl text-blue-200'>Webinar.gg</span>
        </div>
        
      </div>
    </section>
  );
}

export default App;