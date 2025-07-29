import "../Styles/style.css"
import "../Styles/Interface.css"
import logo from "../imgs/Inicio/logo.png"
import eyes from "../imgs/Interface/eyes.png"
import pix from "../imgs/Interface/funcoes/pix.png"
import emprestimo from "../imgs/Interface/funcoes/emprestimo.png"
import inverstimento from "../imgs/Interface/funcoes/investimento.png"
import cartao from "../imgs/Interface/funcoes/cartao.png"
import visa from "../imgs/Interface/funcoes/visa.png"
import nagato from "../imgs/Interface/funcoes/nagato.png"
import rasengan from "../imgs/Interface/funcoes/rasengan.png"

function InterfacePrincipal(){
    return(
        <div>
            <section>

                <div className="header">
                    <div className="title-header">
                        <h2>Bom Dia!</h2>
                        <h3>Luis Felippe</h3>
                    </div>
                    <img src={logo} alt="" />
                </div>

                <div className="valor">
                    <h3>Saldo Em Conta</h3>
                    <div className="container-valor">
                        <h2>R$ 143,50</h2>
                        <img src={eyes} alt="" />
                    </div>
                      <p id="extrato"> Ver Extrato</p>
                </div>

                <div className="funcoes">

                    <div className="container-funcao">
                        <img src={pix} alt="" />
                        <h4>Fazer Pix</h4>
                    </div>

                    <div className="container-funcao">
                        <img src={emprestimo} alt="" />
                        <h4>Emprestimos</h4>
                    </div>

                    <div className="container-funcao">
                        <img src={cartao} alt="" />
                        <h4>Cartões</h4>
                    </div>


                </div>

                <div className="cartao">
                    <div className="info-cartao">
                        <h3 id="trevocard">TREVOCARD</h3>
                        <h3 id="nome">LUIS FELIPPE MARCAL</h3>
                        <div className="infos-numero">
                            <p id="numero-cartao">4242 4242 4242 4242  </p>
                            <div className="subInfos">
                                <p>CVC 098</p>
                                <p>VAL 12/08</p>
                            </div>
                        </div>
                        <h2 id="fatura">R$ 1200.00</h2>
                    </div>
                    <div className="adc-cartao">
                        <img src={visa} alt="" />
                        <p>VENCI 08/09</p>
                    </div>
                </div>
              
                <div className="opcoes">
                    <div className="container-opcoes">
                        <p>Fazer Deposito</p>
                        <img src={emprestimo} alt="" />
                    </div>

                     <div className="container-opcoes">
                        <p>Buscar Emprestimos</p>
                        <img src={cartao} alt="" />
                    </div>

                     <div className="container-opcoes">
                        <p>Buscar Emprestimos</p>
                        <img className="aa" src={nagato} alt="" />
                    </div>

                     <div className="container-opcoes">
                        <p>Buscar Emprestimos</p>
                        <img className="aa" src={rasengan} alt="" />
                    </div>


                </div>
            </section>
            <footer>Improvisado</footer>
        </div>
    )
}
export default InterfacePrincipal