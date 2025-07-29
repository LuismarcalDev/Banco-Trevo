import Inicio from './Pages/Inicio'
import InterfacePrincipal from './Pages/InterfacePrincipal'
import { Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './App.css'

function App() {
 
return(
  <div>
<Routes>
   <Route path="/inicio" element={<Inicio />} />
    <Route path="/central" element={<InterfacePrincipal />} />
</Routes>

  </div>
)
}

export default App
