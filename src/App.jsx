import { useState } from 'react'
import SearchBox from './components/SearchBox'
import InfoBox from './components/InfoBox'
import { ClassNames } from '@emotion/react'
import WeatherApp from './components/WeatherApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp classname="bg-slate-500"/>
    </>
  )
}

export default App  
