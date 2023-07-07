import { useState } from 'react'
import './App.css'
import DemographicTags from './Components/DemographicTags/Tags.jsx'

import Fonts from './Components/Fonts/Fonts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Fonts />
      
      <DemographicTags />
    </div>
  )
}

export default App
