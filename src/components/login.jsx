import { useState } from "react";
import { useAuth } from './AuthProvider'; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "../config_axios";

const FormularioLogin = () => {
    const [username, setUsername] = useState("");
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
        <div className="container-fluid py-2">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="border border-2 rounded-3 col-md-7 col-lg-5 col-xl-5 px-4">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="senha" class="form-label">Password</label>
                            <input type="senha" class="form-control" id="exampleInputPassword1" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="col">
                            <a href="#!">Esqueceu a senha?</a>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                        
                        <div className="text-center">
                            <p>Não tem login? <a href="/user">Cadastre-se como usuário</a></p>
                            <p><a href="/prestador">Cadastre-se como prestador de serviço</a></p>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormularioLogin;