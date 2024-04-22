import { useState } from "react";
import { useAuth } from './AuthProvider'; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "../config_axios";

const FormularioLogin = () => {
    const [email, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.trim() === "" || senha.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await api.post("/login", { username, senha });
            if (response.status === 200) {
                login();
            } else {
                alert("Usuário ou senha inválidos!");
            }
        } catch (error) {
            alert("Erro ao tentar logar. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="container-fluid bg-light py-2">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="p-5 bg-body-secondary rounded-3 border border-2 w-28">
                    <h2>Login</h2><br></br>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email </label>
                            <input type="email" placeholder="Identificação de usuário" class="form-control rounded-0 border border-dark" id="email" aria-describedby="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="senha" class="form-label">Senha</label>
                            <input type="senha" placeholder="Senha" class="form-control rounded-0 border border-dark" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="col mb-3">
                            <a href="#!">Esqueceu a senha?</a>
                        </div>
                        <div className="text-center">
                            <button type="submit" class="w-100 btn btn-primary rounded-0 mb-2">Entrar</button>
                        </div>

                        <div className="text-center">
                            <p><small>Não tem login?</small></p>
                            <div className="mb-3">
                                <a class="w-100 btn btn-default btn btn-outline-primary rounded-0 mt-2" href="/user" role="button">Cadastre-se como usuário</a>
                            </div>
                            <a class="w-100 btn btn-default btn btn-outline-primary rounded-0" href="/prestador" role="button">Cadastre-se como prestador de serviço</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormularioLogin;