import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landingpage from './components/Landingpage'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header/>
        <Landingpage/>
    </div>
  )
}

export default App
