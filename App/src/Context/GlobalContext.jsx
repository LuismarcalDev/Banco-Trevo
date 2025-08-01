import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [valorConta, setValorConta] = useState(() => {
    const valorSalvo = localStorage.getItem('valorConta');
    return valorSalvo !== null ? parseFloat(valorSalvo) : 0;
  });

  const [nomeCartao, setNomeCartao] = useState(() => {
    const nomeSalvo = localStorage.getItem('nomeCartao');
    return nomeSalvo !== null ? nomeSalvo : '';
  });

  const [numeroAleatorio11] = useState(() => {
    const salvo = localStorage.getItem('numeroAleatorio11');
    if (salvo !== null) return parseInt(salvo, 10);
    const novo = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem('numeroAleatorio11', novo);
    return novo;
  });

  const [fecharCartao, setFecharCartao] = useState(() => {
    const salvo = localStorage.getItem('fecharCartao');
    return salvo !== null ? salvo : "none";
  });

  const [abrircartao, setAbrircartao] = useState(() => {
    const salvo = localStorage.getItem('abrircartao');
    return salvo !== null ? salvo : "abrir";
  });

  const array = [118, 578, 689, 543, 567, 212, 987];

  const limite = [
    "1200.00", "840.00", "500.00", "1783.45", "692.10",
    "1599.99", "888.88", "1300.00", "745.50", "1999.90",
    "1567.30", "720.25", "1800.00", "1345.60", "670.80"
  ];

  const [eunao, setEunao] = useState(limite[numeroAleatorio11]);
  const cvc = array[numeroAleatorio11];

  const [deposito, setDeposito] = useState(() => {
    const salvo = localStorage.getItem('deposito');
    return salvo !== null ? salvo : '';
  });

  const [divs, setDivs] = useState(() => {
    const salvo = localStorage.getItem('divs');
    try {
      return salvo ? JSON.parse(salvo) : [];
    } catch (e) {
      console.error("Erro ao fazer parse de 'divs':", e);
      localStorage.removeItem('divs');
      return [];
    }
  });

  const [nomeExtratoDepo, setNomeExtratoDepo] = useState(() => {
    const salvo = localStorage.getItem('nomeExtratoDepo');
    return salvo !== null ? salvo : "";
  });

  const [dadosExtrato, setDadosExtrato] = useState(() => {
    const salvo = localStorage.getItem('dadosExtrato');
    return salvo !== null ? salvo : "";
  });

  function gerarCartaoComMascara() {
    let cartao = '';
    for (let i = 0; i < 4; i++) {
      let bloco = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      cartao += bloco;
      if (i < 3) cartao += '.';
    }
    return cartao;
  }

  const [cartao, setCartao] = useState(() => {
    const salvo = localStorage.getItem('cartao');
    return salvo !== null ? salvo : gerarCartaoComMascara();
  });

  useEffect(() => {
    localStorage.setItem('valorConta', valorConta);
  }, [valorConta]);

  useEffect(() => {
    localStorage.setItem('nomeCartao', nomeCartao);
  }, [nomeCartao]);

  useEffect(() => {
    localStorage.setItem('deposito', deposito);
  }, [deposito]);

  useEffect(() => {
    localStorage.setItem('divs', JSON.stringify(divs));
  }, [divs]);

  useEffect(() => {
    localStorage.setItem('nomeExtratoDepo', nomeExtratoDepo);
  }, [nomeExtratoDepo]);

  useEffect(() => {
    localStorage.setItem('dadosExtrato', dadosExtrato);
  }, [dadosExtrato]);

  useEffect(() => {
    localStorage.setItem('cartao', cartao);
  }, [cartao]);

  useEffect(() => {
    localStorage.setItem('fecharCartao', fecharCartao);
  }, [fecharCartao]);

  useEffect(() => {
    localStorage.setItem('abrircartao', abrircartao);
  }, [abrircartao]);

  return (
    <GlobalContext.Provider value={{
      valorConta,
      setValorConta,
      nomeCartao,
      setNomeCartao,
      numeroAleatorio11,
      eunao,
      setEunao,
      cvc,
      fecharCartao,
      setFecharCartao,
      abrircartao,
      setAbrircartao,
      deposito,
      setDeposito,
      divs,
      setDivs,
      nomeExtratoDepo,
      setNomeExtratoDepo,
      dadosExtrato,
      setDadosExtrato,
      cartao,
      setCartao
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
