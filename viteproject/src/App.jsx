import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Section } from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Section/>
    </>
  )
}

export default App
