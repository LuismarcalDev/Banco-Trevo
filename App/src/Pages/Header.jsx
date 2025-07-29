import logo from "../imgs/Inicio/logo.png";
import "../Styles/style.css";
import "../Styles/Interface.css";
function Header(){
    return(
        <div>
            <div className="header">
          <div className="title-header">
            <h2>Bom Dia!</h2>
            <h3>Luis Felippe</h3>
          </div>
          <img src={logo} alt="" />
        </div>
        </div>
    )
}
export default Header