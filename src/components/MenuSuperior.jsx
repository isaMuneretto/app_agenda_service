import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (

    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/agenda" className="navbar-brand">Agendamento de Serviços</Link>
    
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
};

export default MenuSuperior;
