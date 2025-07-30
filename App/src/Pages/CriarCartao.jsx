import "../Styles/criarCartao.css"
import visa from "../imgs/Interface/funcoes/visa.png";
import Header from "./Header"
function CriarCartao(){
    return(



        // gerar numero aleatorio
        //gerar cvv aleatorio
        //gear validade aleatorio
        //gerar limite aleatoreio de 250 a 1500 

        //pedir cpf //numeor --
        //pedir nome completo //texto--
        //pedir cidade onde mora //texto--
        //pedir endereço --
        //pedir se trabalha em algum lugar // texto-
        // pedir quanto ganha // numero-
        // pedir renda mensal // numero-

        //#069448

        <div className="headers">
            <Header/>
            <div className="crCartao">
                <h2>parabens Luis, seu Limite é de R$ 250,00</h2>
                <div className="nomeCpf" style={{display:"none"}}>
                    <div className="unico-nomeCpf">
                        <label htmlFor="">Informe seu nome Completo</label>
                        <input type="text" placeholder="Nome Completo" />
                    </div>
                    <div className="unico-nomeCpf">
                        <label htmlFor="">Informe seu CPF</label>
                        <input type="text" placeholder="Apenas Numeros" />
                    </div>
                        <div className="buttonids">
                            <button>Confirmar</button>
                        </div>
                </div>

                <div className="endereco" style={{display:"none"}}>
                    <div className="input-lugar">
                        <div className="junto-sono">
                            <label htmlFor="">Escreva seu Endereço</label>
                            <input type="text" placeholder="Endereço Completo" id="rua" />
                        </div>
                        <div className="junto-sono">
                            <label htmlFor="">Numero</label>
                            <input type="text" placeholder="Nº" id="num"/>
                        </div>
                    </div>
                    <div className="input-cidade">
                        <label htmlFor="">Cidade</label>
                        <input type="text" placeholder="Informe Sua Cidade" />
                        
                    </div>
                     <div className="buttonids">
                            <button>Confirmar</button>
                        </div>
                </div>
                    <div className="gerar" style={{display:"none"}}>
                        <span class="loader"></span>
                        <h3>Aguarde</h3>
                    </div>

                    <div className="cartao-gerado">
                         <div className="cartao" id="slaa">
                                  <div className="info-cartao">
                                    <h3 id="trevocard">TREVOCARD</h3>
                                    <h3 id="nome">LUIS FELIPPE MARCAL</h3>
                                    <div className="infos-numero">
                                      <p id="numero-cartao">4242 4242 4242 4242 </p>
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
                                <button id="socorro">Confirmar</button>
                    </div>
                
            </div>
        </div>
    )
}
export default CriarCartao