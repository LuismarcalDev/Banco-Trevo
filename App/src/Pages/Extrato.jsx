import "../Styles/extrato.css"
import "../Styles/style.css"
import Header from "./Header"
import seta from "../imgs/seta.png"
import { useNavigate } from "react-router-dom";
function Extrato(){
     const navigate = useNavigate();
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

                    <div className="extrato-container">
                        <div className="temp">
                            <h3>Deposito em Conta</h3>
                        <p>Conta 602.908.980.86</p>
                        </div>
                        <p id="grana">R$ 29.00</p>
                    </div>
                    
                    <div className="extrato-container">
                        <div className="temp">
                            <h3>Deposito em Conta</h3>
                        <p>Conta 602.908.980.86</p>
                        </div>
                        <p id="grana">R$ 29.00</p>
                    </div>

                    


                </div>
            </section>
        </div>
    )
}
export default Extrato