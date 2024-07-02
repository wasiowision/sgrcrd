import { useState } from 'react'
import './App.css'
import CardSlider from './components/CardSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-row w-full'>
    <CardSlider />
   </div>
  )
}

export default App
