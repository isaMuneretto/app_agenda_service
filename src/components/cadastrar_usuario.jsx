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
      <div className="container-fluid bg-light text-dark min-vh-100 d-flex align-items-center">
        <div className="container p-4 bg-body-secondary text-dark rounded">
        <h4 className="fst-italic mb-3">Preencha os campos para se cadastrar</h4>
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
            {/*<div className="row mb-3">
            <div className="col-5">
              <div className="form-group">
                <label for="rua">Rua</label>
                <input type="text"
                  class="form-control"
                  id="rua"
                  placeholder="Av, Rod, Rua..."
                  required
                  {...register("rua")}
                />
              </div>
            </div>
            <div className="col-1">
              <div className="form-group">
                <label for="numero">Número</label>
                <input type="number"
                  class="form-control"
                  id="numero"
                  placeholder="123..."
                  required
                  {...register("numero")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label for="cidade">Cidade</label>
                <input type="text"
                  class="form-control"
                  id="cidade"
                  placeholder="Apartment, studio, or floor"
                  required
                  {...register("cidade")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label for="bairro">Bairro</label>
                <input type="text"
                  class="form-control"
                  id="bairro"
                  placeholder="Apartment, studio, or floor"
                  required
                  {...register("bairro")}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
          <div className="col">
              <div className="form-group">
              <label htmlFor="estado">Estado</label>
                <select id="estado" className="form-control">
                  <option selected>Selecione...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label htmlFor="cep">CEP</label>
                <input type="text"
                 className="form-control" 
                 id="cep" 
                 placeholder="XXXXXX-XXX"
                  required
                  {...register("bairro")}
                 />
              </div>
            </div>*/}

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
