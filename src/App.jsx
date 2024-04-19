import Menu_Superior from './components/MenuSuperior';
import FormularioLogin from './components/login';
import Home from './pages/Home/home';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import Cadastrar_Prestador from './components/cadastrar_prestador';
import Cadastrar_Agendamento from './pages/Agendamento/agendamento';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSuperior from './components/MenuSuperior';

const ProtectedRoute = ({ children }) => {
    const { autenticado } = useAuth();
    return autenticado ? children : <Navigate to="/login" />;
};

const RoutesWithAuth = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            {/* {autenticado &&}  */}
     
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/login" /> : <FormularioLogin />} /> 
                <Route path="/prestador" element={<><MenuSuperior/><Cadastrar_Prestador /></>} />                
                <Route path="/user" element={<><Menu_Superior /><Cadastrar_Usuarios /></>}/>
                <Route path="/agenda" element={<Cadastrar_Agendamento />}/>
                <Route path="/home" element={<><Menu_Superior /><Home /></>} />
            </Routes>
        </Router>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <RoutesWithAuth/>
        </AuthProvider>
    );
};
  
export default App;