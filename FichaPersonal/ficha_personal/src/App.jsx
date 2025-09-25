import './App.css'
import Home from './layouts/Home'
import Tarjeta from './layouts/Tarjeta'
import Personas from "./layouts/Personas"
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <h1>Ficha</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tarjeta' element={<Tarjeta/>}/>
        <Route path='/personas' element={<Personas/>}/>

      </Routes>
    </>
  )
}

export default App