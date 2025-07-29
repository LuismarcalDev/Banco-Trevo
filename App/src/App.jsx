import Inicio from './Pages/Inicio'
import InterfacePrincipal from './Pages/InterfacePrincipal'
import Deposito from './Pages/Deposito'
import Pix from './Pages/Pix'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
 
return(
  <div>
<Routes>
   <Route path="/inicio" element={<Inicio />} />
    <Route path="/central" element={<InterfacePrincipal />} />
    <Route path='/deposito' element={<Deposito/>}/>
  <Route path='/pix' element={<Pix/>}/>
</Routes>

  </div>
)
}

export default App
