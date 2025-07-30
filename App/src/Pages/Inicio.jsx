import "../Styles/style.css"
import "../Styles/inicio.css"
import logo from "../imgs/Inicio/logo.png"
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
function Inicio(){
   const navigate = useNavigate();

const [sumir,setSumir]= useState("none")
const [senha, setSenha]= useState()
 let sehnaValor = 1234

  function mudar(){

    setSumir("flex")
    if(senha == sehnaValor){
         const irParaSobre = () => {
        navigate('/central');
  }
  ;irParaSobre()
    }
  }



    return(
        <div>
            <main >
               <div className="title-inicio">
                 <img src={logo} alt="" />
                 <h1>TREVO</h1>
                 <p>Sua Conta Digital</p>
               </div>
                <div className="inicio-container">

                    <div className="login-informativo">
                       <div className="perfil-img">
                       <p>L</p>
                       </div>
                        <div className="title-informativo">
                            <p>Luis Felippe marçal macedo</p>
                            <p>602.930.088.86</p>
                        </div>
                        <p id="trocar">Trocar</p>
                    </div>

                        <input type="text" 
                        placeholder="Infrome Sua Senha"
                            value={senha}
                            onChange={(e)=> setSenha(e.target.value)}
                        style={{display:sumir}}
                        />
                    <button id="entrar"  onClick={mudar}>Entrar</button>
                    <button id="cadastro">Fazer Cadastro</button>
                </div>
            </main>
        </div>
    )
}
export default Inicio