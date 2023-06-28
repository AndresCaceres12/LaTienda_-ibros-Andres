
import './App.css'
import { Routes, Route } from "react-router-dom"
import { RenderizarLibros } from './components/RenderizarLibros'


function App() {

  return (
    <>
    <  Routes>
        
        <Route path='/' element={<RenderizarLibros/>}/>
      
      </Routes>
     
    </>
  )
}

export default App
