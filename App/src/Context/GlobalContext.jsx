import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Lê os valores do localStorage ao iniciar
  const [valorConta, setValorConta] = useState(() => {
    const valorSalvo = localStorage.getItem('valorConta');
    return valorSalvo !== null ? parseFloat(valorSalvo) : 0;
  });

  const [nomeCartao, setNomeCartao] = useState(() => {
    const nomeSalvo = localStorage.getItem('nomeCartao');
    return nomeSalvo !== null ? nomeSalvo : '';
  });

  // Gera numeroAleatorio11 e salva no localStorage se não existir
  const [numeroAleatorio11] = useState(() => {
    const salvo = localStorage.getItem('numeroAleatorio11');
    if (salvo !== null) return parseInt(salvo, 10);
    const novo = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem('numeroAleatorio11', novo);
    return novo;
  });

  const [fecharCartao, setFecharCartao] = useState("none");
  const [abrircartao, setAbrircartao] = useState("abrir");

  const array = [118, 578, 689, 543, 567, 212, 987];

  const limite = [
    "1200.00", "840.00", "500.00", "1783.45", "692.10",
    "1599.99", "888.88", "1300.00", "745.50", "1999.90",
    "1567.30", "720.25", "1800.00", "1345.60", "670.80"
  ];

  const [eunao, setEunao] = useState(limite[numeroAleatorio11]);
  const cvc = array[numeroAleatorio11];

  useEffect(() => {
    localStorage.setItem('valorConta', valorConta);
  }, [valorConta]);

  useEffect(() => {
    localStorage.setItem('nomeCartao', nomeCartao);
  }, [nomeCartao]);
const [deposito, setDeposito]= useState(null)
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
      setDeposito
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
