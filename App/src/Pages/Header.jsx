import logo from "../imgs/Inicio/logo.png";
import "../Styles/style.css";
import "../Styles/Interface.css";
import { useState,useEffect } from "react";
function Header(){
    const [dateNew, setDateNew] = useState("");
      useEffect(() => {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
      setDateNew("Bom Dia!");
    } else if (hora >= 12 && hora < 18) {
      setDateNew("Boa Tarde!");
    } else {
      setDateNew("Boa Noite!");
    }
  }, []);
    return(
        <div>
            <div className="header">
          <div className="title-header">
            <h2>{dateNew}</h2>
            <h3>Luis Felippe</h3>
          </div>
          <img src={logo} alt="" />
        </div>
        </div>
    )
}
export default Header