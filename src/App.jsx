import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Component/Nav'
import Web from './Component/Web'
import Gamingwrapper from './Component/Gamingwrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
     <Nav/>
      <Web/>
<Gamingwrapper/>
    </div>
  )
}

export default App
