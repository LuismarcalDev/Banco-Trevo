import Inicio from './Pages/Inicio'
import InterfacePrincipal from './Pages/InterfacePrincipal'
import Deposito from './Pages/Deposito'
import Pix from './Pages/Pix'
import Extrato from './Pages/Extrato'
import CriarCartao from './Pages/CriarCartao'
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
  <Route path='/extrato' element={<Extrato/>}/>
  <Route path='/criarCartao' element={<CriarCartao/>}/>
</Routes>

  </div>
)
}

export default App
