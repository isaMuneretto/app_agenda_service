import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Prestador = () => {
  const { register, handleSubmit, reset} = useForm();
  const [aviso, setAviso ] = useState("");

  const salvar = async (campos) => {
    try {
      const responsePrestador = await api.post("prestadores", {
        prestadorNome: campos.prestadorNome,
        prestadorCnpj: campos.prestadorCnpj,
        prestadorCpf: campos.prestadorCpf,
        prestadorRazaoSocial: campos.prestadorRazaoSocial,
        prestadorEmail: campos.prestadorEmail,
        prestadorSenha: campos.prestadorSenha,
        
      });

      const prestadorId = responsePrestador.data.prestadorId; 
      console.log(prestadorId);

      await api.post("telefone", {
        prestador:{
          prestador_id: prestadorId
        },
          telefoneNumero: campos.telefoneNumero,
      });

      setAviso(`Prestador cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar preatador!");
    }
  };

  return (
    <div className="container-fluid bg-light text-dark min-vh-100 d-flex align-items-center">
      <div className="container p-4 bg-body-secondary text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Prestador de Serviço</h4>
        <form onSubmit={handleSubmit(salvar)}>
        <div className="row mb-3">
            <div className="col">
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
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="exemple@exemple.com"
                  required
                  {...register("email")}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="cnpj"
                  className="form-control"
                  id="cnpj"
                  required
                  {...register("cnpj")}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
              <label htmlFor="razao">Razão Social</label>
                <input
                  type="text"
                  className="form-control"
                  id="razao"
                  required
                  autoFocus
                  {...register("razao")}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
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
            </div>
            <div className="col">
              <div className="form-group">
                <label for="telefone">Telefone para contato</label>
                <input type="text"
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

export default Cadastrar_Prestador;