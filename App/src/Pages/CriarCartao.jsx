import "../Styles/criarCartao.css"
import visa from "../imgs/Interface/funcoes/visa.png";
import Header from "./Header"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import seta from "../imgs/seta.png"
import { useGlobal } from '../Context/GlobalContext';

function CriarCartao(){
   const {  valorConta,
      setValorConta,
      nomeCartao,
      setNomeCartao,
      numeroAleatorio11,
      eunao,
      cvc,
      fecharCartao,
      setFecharCartao,
      abrircartao,
      setAbrircartao, cartao,
      setCartao } = useGlobal();
   const [valorNaoVisivel,setvalorNaoVisivel] = useState()
  const navigate = useNavigate();

  const [comNome, setComNome] = useState("flex");
  const [comEndereco, setComEndereco] = useState("none");
  const [loading, setLoading] = useState("none");
  const [final, setFinal] = useState("none");
  const [titulo, setTitulo] = useState("Vamos Fazer Seu Cartão De Credito");
  

  function endereco() {
    setComNome("none");
    setComEndereco("flex");
    setTitulo("Coloque o Endereço Para o Cartão");
  }

  function gerarCartaoComMascara() {
    let cartao = '';
    for (let i = 0; i < 4; i++) {
      let bloco = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      cartao += bloco;
      if (i < 3) cartao += '.';
    }
    return cartao;
  }


  function loading1() {
    setComEndereco("none");
    setLoading("flex");
    setTitulo("Estamos Configurando Seu Cartão");

    setTimeout(() => {
      const numeroGerado = gerarCartaoComMascara(); // <- gera
      setCartao(numeroGerado); // <- salva no estado
      setLoading("none");
      setTitulo(`${nomeCartao}, Seu Limite é de R$${eunao}`);
      setFinal("block");
    }, 7000);
  }
//numeroAleatorio11, setNumeroAleatorio11
function socorro(){
 navigate('/central')
 setFecharCartao("flex")
 setAbrircartao("none")
}
     

  return (
    <div className="headers">
      <Header />
      <img src={seta} alt="" id="seta" onClick={() => { navigate('/central'); }} />
      
      <div className="crCartao">
        <h2>{titulo}</h2>

        <div className="nomeCpf" style={{ display: comNome }}>
          <div className="unico-nomeCpf">
            <label>Informe seu nome Completo</label>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nomeCartao}
              onChange={(e) => setNomeCartao(e.target.value)}
            />
          </div>
          <div className="unico-nomeCpf">
            <label>Informe seu CPF</label>
            <input type="text" placeholder="Apenas Numeros" />
          </div>
          <div className="buttonids">
            <button onClick={endereco}>Confirmar</button>
          </div>
        </div>

        <div className="endereco" style={{ display: comEndereco }}>
          <div className="input-lugar">
            <div className="junto-sono">
              <label>Escreva seu Endereço</label>
              <input type="text" placeholder="Endereço Completo" id="rua" />
            </div>
            <div className="junto-sono">
              <label>Numero</label>
              <input type="text" placeholder="Nº" id="num" />
            </div>
          </div>
          <div className="input-cidade">
            <label>Cidade</label>
            <input type="text" placeholder="Informe Sua Cidade" />
          </div>
          <div className="buttonids">
            <button onClick={loading1}>Confirmar</button>
          </div>
        </div>

        <div className="gerar" style={{ display: loading }}>
          <span className="loader"></span>
          <h3>Aguarde</h3>
        </div>

        <div className="cartao-gerado" style={{ display: final }}>
          <div className="cartao" id="slaa">
            <div className="info-cartao">
              <h3 id="trevocard">TREVOCARD</h3>
              <h3 id="nome">{nomeCartao}</h3>
              <div className="infos-numero">
                <p id="numero-cartao">{cartao}</p>
                <div className="subInfos">
                  <p>CVC {cvc}</p>
                  <p>VAL 12/08</p>
                </div>
              </div>
              <h2 id="fatura">R$ {eunao}</h2>
            </div>
            <div className="adc-cartao">
              <img src={visa} alt="" />
              <p>VENCI 12/08</p>
            </div>
          </div>
          <button id="socorro" onClick={socorro }>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default CriarCartao;
