import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (

    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <Link to="/agenda" className="navbar-brand">Teste</Link>


        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

        <a class="btn btn-light" href="/login" role="button">Entrar</a>

       
      </div>
    </nav>
  );
};

export default MenuSuperior;
