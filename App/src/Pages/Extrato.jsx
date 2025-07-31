import "../Styles/extrato.css"
import "../Styles/style.css"
import Header from "./Header"
import seta from "../imgs/seta.png"
import { useNavigate } from "react-router-dom";
import { useGlobal } from '../Context/GlobalContext';
import { useState } from "react";
function Extrato(){
     const navigate = useNavigate();
     const { valorConta,setValorConta,  deposito,
      setDeposito } = useGlobal();
const [divs,setDivs]= useState([])
function adicionarDiv(){
    setDivs([...divs, {}])
}
    return(
        <div className="headers">
            <Header/>
            <img src={seta} alt="" id="seta"  onClick={()=>{ navigate('/central');}}/>
            <section className="Extrato">
         <div className="title-extrato">
                   <h2>Confira seu Extrato</h2>
                <hr />
         </div>
                <div className="container-extrato-geral">
{divs.map((_, index) => (
                    <div className="extrato-container" key={index} >
                        <div className="temp">
                            <h3>Deposito em Conta</h3>
                        <p>Conta 602.908.980.86</p>
                        </div>
                        <p id="grana">R$ {deposito}</p>
                    </div>
                     ))}
                    <button onClick={adicionarDiv}>wefwefw</button>

                    


                </div>
            </section>
        </div>
    )
}
export default Extrato