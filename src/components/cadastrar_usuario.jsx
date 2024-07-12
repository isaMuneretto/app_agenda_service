import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    console.log(campos);
    try {
      const responseUsuario = await api.post("usuarios", {
        usuarioNome: campos.usuarioNome,
        usuarioCpf: campos.usuarioCpf,
        email: campos.usuarioEmail,
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

      setAviso("Usuário e telefone cadastrado com sucesso!");
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
      <div className="container-fluid bg-dark text-light d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="container p-4 bg-light text-dark rounded" style={{ maxWidth: "500px", maxHeight: "82vw", padding: "30px 20px" }}>
          <h4 className="fst-italic mb-3 text-center">Preencha os campos para se cadastrar</h4>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="d-flex justify-content-between">
              <input
                type="submit"
                className="btn btn-dark me-2"
                value="Cadastrar"
              />
              <input
                type="reset"
                className="btn btn-light"
                value="Limpar"
              />
            </div>
          </form>
          <div className="alert mt-3">{aviso}</div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar_Usuario;
