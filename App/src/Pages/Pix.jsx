import Header from "./Header"
import "../Styles/pixes.css"
import { useGlobal } from '../Context/GlobalContext';
import { useState } from "react";

function Pix(){
       const { valorConta } = useGlobal();
       const [sumirPix,setSumirPix] = useState("none")
    function sumira(){
        setSumirPix("flex")
    }

    return(
        <div className="geralPix">
            <Header/>
            <section className="pix">

        <div className="pix-container">
                <div className="info-CPF">
                    <label htmlFor="">Informe o CPF do Destinatario </label>
                    <input type="text"
                    placeholder="Informe o cpf"
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
                    />
                    <hr />
                 </div>
                 

                    </div>
                    <button onClick={sumira}>
                        Confirmar
                    </button>


            </div>
            </section>
        </div>
    )
}
export default Pix