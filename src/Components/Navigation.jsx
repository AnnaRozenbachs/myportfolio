import { NavLink } from "react-router-dom"
const Navigation= () =>{

    return (
      <ul className="nav-container">
        <li className="App-link"><NavLink to="/home">Hem</NavLink></li>
        <li className="App-link"><NavLink to="/about">Om mig</NavLink></li>
        <li className="App-link"><NavLink to='/work'>Jobb</NavLink></li>
        <li className="App-link"><NavLink to='/contact'>Kontakt</NavLink></li>
      </ul>
    )
  
  }
export default Navigation