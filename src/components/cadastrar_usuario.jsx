import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("usuarios", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              autoFocus
              {...register("name")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              {...register("email")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="cpf">CPF</label>
            <input
              type="cpf"
              className="form-control"
              id="cpf"
              required
              {...register("cpf")}
            />
          </div>
          <div className="form-group mt-2">
          <label htmlFor="data_nascimento">Data de Nascimento:</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_nascimento"
                  required
                  {...register("data_nascimento")}
            />
            </div>
            <div class="form-group">
              <label for="rua">Rua:</label>
              <input type="text" 
              class="form-control"
               id="rua"
                placeholder="Apartment, studio, or floor"
                required
              {...register("rua")}
               />
            </div>
            <div class="form-group">
              <label for="numero">Número:</label>
              <input type="text" 
              class="form-control"
               id="numero"
                placeholder=" "
                required
              {...register("numero")}
               />
            </div>
            <div class="form-row">
              <div class="col">
                <label for="cidade">Cidade:</label>
                <input type="text" 
                class="form-control" 
                id="cidade"
              />
              </div>
              <div class="col">
                <label for="bairro">Bairro:</label>
                <input type="text" 
                class="form-control" 
                id="bairro"
              />
              </div>
              <div class="col">
                <label for="estado">Estado</label>
                <select id="estado" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col">
                <label for="cep">CEP</label>
                <input type="text" class="form-control" id="inputZip"/>
              </div>
            </div>         

            <input
              type="submit"
              className="btn btn-primary mt-3"
              value="Enviar"
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
  );
};

export default Cadastrar_Usuario;
