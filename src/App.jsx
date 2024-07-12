import FormularioLogin from './components/login';
import Home from './pages/Home/home';
import Cadastrar_Usuario from './components/cadastrar_usuario';
import Cadastrar_Prestador from './components/cadastrar_prestador';
import Agendamento from './pages/Agendamento/agendamento';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './components/useAuth'; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSuperior from './components/MenuSuperior.jsx';
import "./css/usuario.css";

const App = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            { autenticado && <MenuSuperior />  }
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/agenda" /> : <FormularioLogin />} /> 
                <Route path="/prestador" element={autenticado ? <Cadastrar_Prestador /> : <Navigate to="/login" />} />                
                <Route path="/user" element={autenticado ? <Cadastrar_Usuario /> : <Navigate to="/login" />}/>
                <Route path="/agenda" element={autenticado ? <Agendamento /> : <Navigate to="/login" />}/>
                <Route path="/home" element={autenticado ? <Home /> :<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
