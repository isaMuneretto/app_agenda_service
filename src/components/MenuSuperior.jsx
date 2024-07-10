import { Link } from "react-router-dom";


const MenuSuperior = () => {

  return (

    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">

        <Link to="/" className="navbar-brand">{nome}</Link>
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
        <button onClick={logout} className="navbar-brand">Logout</button>
      </div>
    </nav>
  );
};

export default MenuSuperior;
