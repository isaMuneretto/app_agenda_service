import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (

    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <Link to="/agenda" className="navbar-brand">Agendamento de Serviços</Link>


        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <nav class="navbar bg-body-tertiary">
          <form class="container-fluid justify-content-start">
            <button class="btn btn-outline-success me-2" type="button">Main button</button>
          </form>
        </nav>
      </div>
    </nav>
  );
};

export default MenuSuperior;
