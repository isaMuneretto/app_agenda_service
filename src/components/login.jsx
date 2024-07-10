import { useState } from "react";
import useAuth from "./useAuth"; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

const FormularioLogin = () => {
    const [usuarioEmail, setUsuarioEmail] = useState("");
    const [usuarioSenha, setUsuarioSenha] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (usuarioEmail.trim() === "" || usuarioSenha.trim() === "") {
            setError("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuarioEmail, usuarioSenha })
            });
    
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                login(); // Chama o método login do AuthProvider
                navigate('/agenda'); // Redireciona para a página de agendamentos
            } else {
                setError("Usuário ou senha inválidos!");
            }
        } catch (error) {
            setError("Erro ao tentar logar. Tente novamente mais tarde.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
        <div className="container-fluid bg-light py-2">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="p-5 bg-body-secondary rounded-3 border border-2 w-28">
                    <h2>Faça o Login</h2><br></br>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email </label>
                            <input type="email" placeholder="Identificação de usuário" class="form-control rounded-0 border border-dark" id="usuarioEmail" aria-describedby="usuarioEmail" value={usuarioEmail} onChange={(e) => setUsuarioEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Senha</label>
                            <input type="senha" placeholder="Senha" class="form-control rounded-0 border border-dark" id="usuarioSenha" value={usuarioSenha} onChange={(e) => setUsuarioSenha(e.target.value)} />
                        </div>
                        <div className="col mb-3">
                            <a href="#!">Esqueceu a senha?</a>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="text-center">
                            <button type="submit" class="w-100 btn btn-primary rounded-0 mb-2">Entrar</button>
                        </div>

                        <div className="text-center">
                            <p><small>Não tem login?</small></p>
                            <div className="mb-3">
                                <a class="w-100 btn btn-default btn btn-outline-primary rounded-0 mt-2" href="http://localhost:5173/user" role="button">Cadastre-se </a>
                            </div>
                            <a class="w-100 btn btn-default btn btn-outline-primary rounded-0" href="http://localhost:5173/prestador" role="button">Cadastre-se como Prestador de Serviço</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default FormularioLogin;