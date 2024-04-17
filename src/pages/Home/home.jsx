import React from 'react';
import MenuSuperior from '../../components/MenuSuperior';


const Home = () => {
  return (
    <div>
      <MenuSuperior />
      <div className="text-center mt-5">
        <h1>Página inicial</h1>
        <p>Você está logado!</p>
      </div>
    </div>
  );
};

export default Home;