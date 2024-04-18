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

        <section className="vh-100">
        <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">   
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label className="form-label" htmlFor="username">Usuário</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="senha" className="form-control form-control-lg" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <label className="form-label" htmlFor="senha">Senha</label>
                        </div>
                       
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                        <div class="row mb-2">
                <div class="col d-flex justify-content-center">

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Lembrar de mim </label>
                    </div>
                </div>

                <div class="col">

                    <a href="#!">Esqueceu a senha?</a>
                </div>
            </div>

            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Entrar</button>


            <div class="text-center">
                <p>Não tem login? <a href="/user">Cadastre-se como usuário</a></p>
                <p>ou :<a href="/prestador">Cadastre-se como prestador de serviço</a></p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                </button>
                        
                </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


    )
};

export default FormularioLogin;