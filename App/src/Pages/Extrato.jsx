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
             setDeposito,divs,setDivs,  nomeExtratoDepo,
      setNomeExtratoDepo,
      dadosExtrato,
      setDadosExtrato,} = useGlobal();


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
                {divs.map((item, index) => (
                    <div className="extrato-container" key={index} >
                        <div className="temp">
                            <h3>{item.nomeExtrato}</h3>
                        <p>Conta {item.dadosExtrato1}</p>
                        </div>
                        <p id="grana">R$ { item.valor}</p>
                    </div>
                     ))}
                

                    


                </div>
            </section>
        </div>
    )
}
export default Extrato