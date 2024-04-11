import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_tarefas';
import FormularioLogin from './components/login';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';
import Cadastrar_Prestador from './components/cadastrar_prestador';

const ProtectedRoute = ({ children }) => {
    const { autenticado } = useAuth();
    return autenticado ? children : <Navigate to="/login" />;
};

const RoutesWithAuth = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            {autenticado && <Menu_Superior />}
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/tarefas" /> : <FormularioLogin />} />
                <Route path="/prestador" element={<Cadastrar_Prestador />} />
                <Route path="/manutencao" element={<ProtectedRoute><Manutencao_Tarefas /></ProtectedRoute>} />
                <Route path="/user" element={<Cadastrar_Usuarios />}/>
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