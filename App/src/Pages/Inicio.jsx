import "../Styles/style.css"
import "../Styles/inicio.css"
import logo from "../imgs/Inicio/logo.png"
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';

  const irParaSobre = () => {
    navigate('/central');
  };
function Inicio(){
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
                            <p>502.930.048.86</p>
                        </div>
                        <p id="trocar" onClick={irParaSobre}>Trocar</p>
                    </div>

                        <input type="text" 
                        placeholder="Infrome Sua Senha"/>
                    <button id="entrar" >Entrar</button>
                    <button id="cadastro">Fazer Cadastro</button>
                </div>
            </main>
        </div>
    )
}
export default Inicio