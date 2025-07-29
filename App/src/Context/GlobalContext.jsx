import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Lê o valor do localStorage ao iniciar
  const [valorConta, setValorConta] = useState(() => {
    const valorSalvo = localStorage.getItem('valorConta');
    return valorSalvo !== null ? parseFloat(valorSalvo) : 0;
    
  });



  // Salva no localStorage sempre que valorConta mudar
  useEffect(() => {
    localStorage.setItem('valorConta', valorConta);


  }, [valorConta]);

  return (
    <GlobalContext.Provider value={{ valorConta, setValorConta }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
