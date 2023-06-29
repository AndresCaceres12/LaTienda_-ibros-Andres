
import './App.css'
import { Routes, Route } from "react-router-dom"
import { RenderizarLibros } from './components/RenderizarLibros'
import Apartado from './components/Apartado'
import Footer from './components/Footer'
import Pagos from './components/Pagos'



function App() {

  return (
    <>
    <  Routes>
        <Route path='/' element={<RenderizarLibros/>}/>
        <Route path="/libro/:index" element={<Apartado />} />
        <Route path='/Pagos' element={<Pagos/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
