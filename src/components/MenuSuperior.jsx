import { Link } from "react-router-dom";
import useAuth from './useAuth';

const MenuSuperior = () => {
  const { logout } = useAuth();

  return (

    <nav class="navbar navbar-expand-lg bg-body-black">
      <div className="container">     
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/prestador" className="nav-link">Cadastrar Prestador</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/agenda" className="nav-link">Agendamentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">Cadastrar Usuário</Link>
          </li>
          
        </ul>
            {/* {<a class="btn btn-light" href="/login" role="button">Sair</a>} */}
        <button onClick={logout} className="btn btn-light">Logout</button>
      </div>
    </nav>

    
  );
};

export default MenuSuperior;
