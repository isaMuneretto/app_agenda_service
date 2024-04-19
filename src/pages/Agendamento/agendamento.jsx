import { useForm } from "react-hook-form";
import { api } from "../../config_axios";
import { useState } from "react";

const Cadastrar_Agendamento = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("agendamento", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Agendamento</h4>
        
        <form onSubmit={handleSubmit(salvar)}>
          <div className="row mb-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="servico">Serviços</label>
                <select id="servico" className="form-control">
                  <option selected>Selecione...</option>
                  <option>Marido de aluguel</option>
                  <option>Eletricista</option>
                  <option>Encanador</option>
                  <option>Cortar grama</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label htmlFor="prestadores">Prestadores de Serviço</label>
                <select id="prestadores" className="form-control">
                  <option selected>Selecione...</option>
                  <option>João da Silva</option>
                  <option>Paulo Rodrigues</option>
                  <option>José dos Santos</option>
                  <option>Renata Souza</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="data_inicio">Data Início</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_inicio"
                  required
                  {...register("data_inicio")}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
              <label htmlFor="hora">Horário</label>
                <input
                  type="time"
                  className="form-control"
                  id="hora"
                  required
                  {...register("hora")}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <div className="form-group">
                <label for="obs">Observação</label>
                <input type="text"
                  class="form-control"
                  id="obs"
                  required
                  {...register("obs")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="telefone">Telefone para contato</label>
                <input type="number"
                  class="form-control"
                  id="telefone"
                  placeholder="9999-9999"
                  required
                  {...register("telefone")}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Teste
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Agendar"
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

export default Cadastrar_Agendamento;
