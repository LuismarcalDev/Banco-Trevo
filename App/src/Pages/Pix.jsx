import Header from "./Header"
import "../Styles/pixes.css"
import { useGlobal } from '../Context/GlobalContext';
import { useState } from "react";
import iconSecurity from "../imgs/deposito/iconSecurity.png"
import seta from "../imgs/seta.png"
import { useNavigate } from "react-router-dom";
function Pix(){
       const { valorConta,setValorConta,eunao,setEunao } = useGlobal();
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
if (verdo == true){
ter()
}else if(verdo == false)
tor()

}
function ter (){
if (valorConta>retirar && verdo == true ){
setValorConta(valorConta-retirar)
setSemIdeia("none")

}else if (retirar>valorConta){
setSemIdeia("flex")
}
}
function tor(){
    if (eunao>retirar && verdo ==false){
        setEunao(eunao-retirar)
        setSemIdeia("none")
    }else if(retirar>eunao){
        setSemIdeia("flex")
    }
}


const [verdo,setVerdo]= useState(null)
 const [corCorrente, setCorCorrente]=useState("white")
  const [corCartao, setCorCartao]=useState("white")
  const [letraCorrente,setLetraCorrente]=useState("black")
  const [letraCartao,setLetraCartao]=useState("black")
function ContaCorrente(){
   setCorCorrente("#069448")
    setCorCartao("white")
    setLetraCartao("black")
    setLetraCorrente("white")
    setVerdo(true)


}
function CartaoCredito(){
   setCorCartao("#069448")
    setCorCorrente("white")
      setLetraCartao("white")
    setLetraCorrente("black")
    setVerdo(false)
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
                      <div className="bts-granaaa">
                        <button onClick={ContaCorrente} style={{backgroundColor:corCorrente, color:letraCorrente}} >Conta Corrente</button>
                        <button onClick={CartaoCredito} style={{backgroundColor:corCartao , color:letraCartao}}>Cartão de Credito</button>
                    </div>
                    
                    <p style={{display:semIdeia}}>Saldo Insuficiente</p>
                  
                 </div>
                 

                    </div>
                    <button id="bk" onClick={sumira}>
                        Confirmar
                    </button>


            </div>
              <div className="confirmacao" style={{display:aparecerSeguranca}}>
                                <img src={iconSecurity} alt="" />
                                <p>Por questoes de Confirmação voce Realiza fazer este Deposito em sua atual?</p>
                                <button  onClick={confirmacao}>Confirmar</button>
                             </div>
            </section>
        </div>
    )
}
export default Pix