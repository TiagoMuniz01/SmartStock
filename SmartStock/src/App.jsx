import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
/* 
import reactLogo from './assets/react.svg'
<img src={reactLogo} className="logo react" alt="React logo" />

*/
function App() {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export  { App }
