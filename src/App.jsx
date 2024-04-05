import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-gray-500 text-2xl">
      Cine Quest Initialized
    </div>
  )
}

export default App
