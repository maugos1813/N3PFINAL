import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { API } from './useFetch' 

function App() {
  const [count, setCount] = useState(0)
  const {data} = API(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c5f51177f273108b4b1465c901f0589`)
  console.log(data);
  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App
