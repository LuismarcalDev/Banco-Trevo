import Header from "./Header"
import "../Styles/pixes.css"
import { useGlobal } from '../Context/GlobalContext';
import { useState } from "react";
import iconSecurity from "../imgs/deposito/iconSecurity.png"
import seta from "../imgs/seta.png"
import { useNavigate } from "react-router-dom";
function Pix(){
       const { valorConta,setValorConta } = useGlobal();
       const [sumirPix,setSumirPix] = useState("none")
       const [retirar,setRetirar]=useState(null)
       const [cpf,setCpf]= useState(null)
         const navigate = useNavigate();

       const [semIdeia,setSemIdeia]=useState("none")
    function sumira(){
       
        if (retirar > 0){
            setCorHeaders("#0000002d")
setAparecerSeguranca("flex")

        }
        else{
            console.log("nada")
        }

        if( cpf>0){
             setSumirPix("flex")
        }
    }
     const [corHeaders,setCorHeaders] = useState("transparent")
        const [aparecerSeguranca, setAparecerSeguranca] = useState("none")
function confirmacao(){
setCorHeaders("transparent")
setAparecerSeguranca("none")
if (valorConta>retirar){
setValorConta(valorConta-retirar)
setSemIdeia("none")
}else if (retirar>valorConta){
setSemIdeia("flex")
}


}
    return(
        <div className="geralPix" style={{backgroundColor:corHeaders}}>
            <Header/>
            <img src={seta} alt="" id="seta"  onClick={()=>{ navigate('/central');}}/>
            <section className="pix">

        <div className="pix-container">
                <div className="info-CPF">
                    <label htmlFor="">Informe o CPF do Destinatario </label>
                    <input type="text"
                    placeholder="Informe o cpf"
                    value={cpf}
                    onChange={(e)=> setCpf(e.target.value)}
                    />
                    <p>Saldo: R${valorConta} </p>
                </div>
                    <div className="valorPix" style={{display:sumirPix}}>

                           <div className="title-pix">
                            <h2>Informe o Valor</h2>
                            <hr id="hr-pix" />
                    </div>

                 <div className="geralpaga-pix">
                    <input type="text" 
                    placeholder="R$0"
                    value={retirar}
                    onChange={(e)=> setRetirar(e.target.value)}
                    />
                    <hr />
                    <p style={{display:semIdeia}}>Saldo Insuficiente</p>
                 </div>
                 

                    </div>
                    <button onClick={sumira}>
                        Confirmar
                    </button>


            </div>
              <div className="confirmacao" style={{display:aparecerSeguranca}}>
                                <img src={iconSecurity} alt="" />
                                <p>Por questoes de Confirmação voce Realiza fazer este Deposito em sua atual?</p>
                                <button onClick={confirmacao}>Confirmar</button>
                             </div>
            </section>
        </div>
    )
}
export default Pix