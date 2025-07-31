import Header from "./Header"
import "../Styles/deposito.css"
import "../Styles/style.css"
import iconSecurity from "../imgs/deposito/iconSecurity.png"
import { useGlobal } from '../Context/GlobalContext';
import { useState } from "react";
import seta from "../imgs/seta.png"
import { useNavigate } from "react-router-dom";
function Deposito(){
      const navigate = useNavigate();
       const { valorConta,setValorConta,  deposito,
      setDeposito,divs,setDivs,  nomeExtratoDepo,
      setNomeExtratoDepo,
      dadosExtrato,
      setDadosExtrato, } = useGlobal();
       
      
        function depositoMandar(){
            setValorConta(Number(deposito)+Number(valorConta))
            setCorHeaders("transparent")
setAparecerSeguranca("none")
        }
        function dez(){
            setDeposito(10)
        }
         function vinte(){
            setDeposito(20)
        }
         function cinquenta(){
            setDeposito(50)
        }
         function cem(){
            setDeposito(100)
        }//#0000002d
        const [corHeaders,setCorHeaders] = useState("transparent")
        const [aparecerSeguranca, setAparecerSeguranca] = useState("none")
function confirmacao() {
  setCorHeaders("#0000002d");
  setAparecerSeguranca("flex");

  const novoNome = "Deposito em Conta";
  const novoDados = "3456.345.332.34";

  setNomeExtratoDepo(novoNome);
  setDadosExtrato(novoDados);

  setDivs([...divs, { valor: deposito, nomeExtrato: novoNome, dadosExtrato1: novoDados }]);
}


    return(
        <div className="headers" style={{backgroundColor:corHeaders}}>
            
            <Header/>
         <img src={seta} alt="" id="seta"  onClick={()=>{ navigate('/central');}}/>
            <article className="deposito">
            <div className="deposito-container">
                
               <div className="title-deposito">
                 <h2>Fazer Deposito</h2>
                 <div className="hrs-deposito">
                    <hr id="hr-deposito" />
                    <hr id="hr-deposito" />
                 </div>
                 </div>

                 <div className="adicionar-valor">
                    <input type="text" placeholder="R$ 0"  
                    value={deposito}
                    onChange={(e)=> setDeposito(e.target.value)}
                    
                    />
                    <hr id="valor-hr"/>
                    <div className="valores-predefinidos-container">
                        <div className="valores-predefinidos" onClick={dez}>
                            R$ 10
                        </div>
                         <div className="valores-predefinidos" onClick={vinte}>
                            R$ 20
                        </div>
                         <div className="valores-predefinidos"onClick={cinquenta}>
                            R$ 50
                        </div>
                         <div className="valores-predefinidos"onClick={cem}>
                            R$ 100
                        </div>
                    </div>
                    <button id="btn-deposito" onClick={confirmacao}>
                        Fazer Deposito
                    </button>
                 </div>
                 <div className="confirmacao" style={{display:aparecerSeguranca}}>
                    <img src={iconSecurity} alt="" />
                    <p>Por questoes de Confirmação voce Realiza fazer este Deposito em sua atual?</p>
                    <button onClick={depositoMandar}>Confirmar</button>
                 </div>
               
            </div>
            </article>
        </div>
    )
}
export default Deposito