import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    console.log(campos)
    try {
      const responseUsuario = await api.post("usuarios", {
        usuarioNome: campos.usuarioNome,
        usuarioCpf: campos.usuarioCpf,
        email: campos.email,
        usuarioDataNascimento: campos.usuarioDataNascimento,
        usuarioSenha: campos.usuarioSenha,
      });

      const usuarioId = responseUsuario.data.usuarioId; 
      console.log(usuarioId);
    
      await api.post("telefone", {
        usuario: {
          usuarioId: usuarioId
        },
        telefoneNumero: campos.telefoneNumero,
      });

      setAviso("Usuário cadastrado com sucesso!");
      reset();
    } catch (error) {
      console.log(error);
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastrar Usuário</title>
      </Helmet>
      <div className="container-fluid bg-light text-dark min-vh-100 d-flex align-items-center">
        <div className="container p-4 bg-body-secondary text-dark rounded">
          <form onSubmit={handleSubmit(salvar)}>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="usuarioNome">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usuarioNome"
                    required
                    autoFocus
                    {...register("usuarioNome")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="usuarioEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="usuarioEmail"
                    placeholder="exemple@exemple.com"
                    required
                    {...register("usuarioEmail")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="usuarioSenha">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="usuarioSenha"
                    required
                    {...register("usuarioSenha")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="usuarioCpf">CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usuarioCpf"
                    required
                    {...register("usuarioCpf")}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="usuarioDataNascimento">Data de Nascimento</label>
                  <input
                    type="date"
                    className="form-control"
                    id="usuarioDataNascimento"
                    required
                    {...register("usuarioDataNascimento")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="telefoneNumero">Telefone para contato</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefoneNumero"
                    placeholder="9999-9999"
                    required
                    {...register("telefoneNumero")}
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary mt-3"
              value="Cadastrar"
            />
            <input
              type="reset"
              className="btn btn-danger mt-3 ms-3"
              value="Limpar"
            />
          </form>
          <div className="alert mt-3">{aviso}</div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar_Usuario;
