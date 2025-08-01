import "../Styles/style.css";
import "../Styles/Interface.css";
import Header from "./Header";
import eyes from "../imgs/Interface/eyes.png";
import pix from "../imgs/Interface/funcoes/pix.png";
import emprestimo from "../imgs/Interface/funcoes/emprestimo.png";
import cartao1 from "../imgs/Interface/funcoes/cartao.png";
import visa from "../imgs/Interface/funcoes/visa.png";
import nagato from "../imgs/Interface/funcoes/nagato.png";
import rasengan from "../imgs/Interface/funcoes/rasengan.png";
import eyesBlock from "../imgs/Interface/eyesBlock.png";
import adc from "../imgs/adc.png"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useGlobal } from '../Context/GlobalContext';

function InterfacePrincipal() {
     const navigate = useNavigate()
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
      setAbrircartao , cartao,
      setCartao} = useGlobal();
   const [valorNaoVisivel,setvalorNaoVisivel] = useState()
  useEffect(()=>{
       setvalorNaoVisivel(valorConta)
  }, [valorConta])
  const [olho, setOlho] = useState(eyes);
  let teste = true;
  function VerValor() {
    if (teste == true) {
      setOlho(eyesBlock);
      setvalorNaoVisivel("•••••");
      teste = false;
    } else {
      setOlho(eyes);
      setvalorNaoVisivel(valorConta);
    }
  }
  function depositoEnviar(){
   
navigate('/deposito');
  }
 function pix0(){
        navigate('/pix');
       }
       function extratoEnvi(){
        navigate('/extrato');
       }

  function sono2(){
   /*   valorConta,
      setValorConta,
      nomeCartao,
      setNomeCartao,
      numeroAleatorio11,
      eunao,
      cvc,
      fecharCartao,
      setFecharCartao,
      abrircartao,
      setAbrircartao*/
      
navigate('/Criarcartao');
  }
  return (
    <div>
       
      <section>
         <Header/>

        <div className="valor">
          <h3>Saldo Em Conta</h3>
          <div className="container-valor">
            <h2>R$ {valorNaoVisivel}</h2>
            <img onClick={VerValor} src={olho} alt="" id="olhinho" />
          </div>
          <p id="extrato" onClick={extratoEnvi}> Ver Extrato</p>
        </div>

        <div className="funcoes">
          <div className="container-funcao" onClick={pix0}>
            <img src={pix} alt=""  />
            <h4>Fazer Pix</h4>
          </div>

          <div className="container-funcao" onClick={depositoEnviar}>
            <img src={emprestimo} alt="" />
            <h4>Depositos</h4>
          </div>

          <div className="container-funcao" onClick={sono2}>
            <img src={cartao1} alt="" />
            <h4>Cartões</h4>
          </div>
        </div>

        <div className="cartao" style={{display:fecharCartao}}>
          <div className="info-cartao">
            <h3 id="trevocard">TREVOCARD</h3>
            <h3 id="nome">{nomeCartao}</h3>
            <div className="infos-numero">
              <p id="numero-cartao">{cartao} </p>
              <div className="subInfos">
                <p>CVC {cvc}</p>
                <p>VAL 12/08</p>
              </div>
            </div>
            <h2 id="fatura">R$ {eunao}</h2>
          </div>
          <div className="adc-cartao">
            <img src={visa} alt="" />
            <p>VENCI 08/09</p>
          </div>
        </div>
        <div className="gerarCartaoNovo" onClick={sono2} style={{display:abrircartao}}>
          <img src={adc} alt="" />
          <p>Criar Cartão</p>
        </div>

        <div className="opcoes">
          <div className="container-opcoes" >
            <p>Fazer Deposito</p>
            <img src={emprestimo} alt="" />
          </div>

          <div className="container-opcoes">
            <p>Buscar Emprestimos</p>
            <img src={cartao} alt="" />
          </div>

          <div className="container-opcoes">
            <p>Seu Banco</p>
            <img className="aa" src={nagato} alt="" />
          </div>

          <div className="container-opcoes">
            <p>Renegociação</p>
            <img className="aa" src={rasengan} alt="" />
          </div>
        </div>
      </section>
      <footer>Improvisado</footer>
    </div>
  );
}
export default InterfacePrincipal;
