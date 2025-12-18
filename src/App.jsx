import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Otp from './Components/Otp';
import Age from './Components/Age';

function App() {


  return (
    <>
    <Age></Age>
    <Otp number={10}></Otp>
</>
  );
}

export default App;