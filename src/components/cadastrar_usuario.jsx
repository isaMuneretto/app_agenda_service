import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    console.log(campos)
    try {
      const response = await api.post("/usuarios", campos);
      console.log( response.data);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      console.log( error);
      setAviso("Erro ao cadastrar usuário!");
      
    }
  };

  return (
    <div className="container-fluid bg-light text-dark min-vh-100 d-flex align-items-center">
      <div className="container p-4 bg-body-secondary text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
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
                <label htmlFor="usuarioEmaill">Email</label>
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
                  type="cpf"
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
            <div className="col-5">
              <div className="form-group">
                <label for="enderecoRua">Rua</label>
                <input type="text"
                  class="form-control"
                  id="enderecoRua"
                  placeholder="Av, Rod, Rua..."
                  required
                  {...register("enderecoRua")}
                />
              </div>
            </div>
            <div className="col-1">
              <div className="form-group">
                <label for="enderecoNumero">Número</label>
                <input type="number"
                  class="form-control"
                  id="enderecoNumero"
                  placeholder="123..."
                  required
                  {...register("enderecoNumero")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label for="enderecoCidade">Cidade</label>
                <input type="text"
                  class="form-control"
                  id="enderecoCidade"
                  placeholder="Insira a sua cidade"
                  required
                  {...register("enderecoCidade")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label for="enderecoBairro">Bairro</label>
                <input type="text"
                  class="form-control"
                  id="enderecoBairro"
                  placeholder="Insira o seu bairro"
                  required
                  {...register("enderecoBairro")}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
          <div className="col">
              <div className="form-group">
              <label htmlFor="enderecoEstado">Estado</label>
                <select id="enderecoEstado" 
                className="form-control">
                  <option selected>Selecione...</option>
                  <option value="AC">ACRE</option>
                  <option value="AL">ALAGOAS</option>
                  <option value="AP">AMAPÁ</option>
                  <option value="AM">AMAZONAS</option>
                  <option value="BA">BAHIA</option>
                  <option value="CE">CEARÁ</option>
                  <option value="ES">ESPIRÍTO SANTO</option>
                  <option value="GO">GOIÁS</option>
                  <option value="MT">MATO GROSSO</option>
                  <option value="MS">MATO GROSSO DO SUL</option>
                  <option value="MG">MINAS GERAIS</option>
                  <option value="PA">PARÁ</option>
                  <option value="PB">PARAÍBA</option>
                  <option value="PR">PARANÁ</option>
                  <option value="PE">PERNAMBUCO</option>
                  <option value="PI">PIAUÍ</option>
                  <option value="RJ">RIO DE JANEIRO</option>
                  <option value="RN">RIO GRANDE DO NORTE</option>
                  <option value="RS">RIO GRANDE DO SUL</option>
                  <option value="RO">RONDÔNIA</option>
                  <option value="RR">RORAIMA</option>
                  <option value="SC">SANTA CATARINA</option>
                  <option value="SP">SÃO PAULO</option>
                  <option value="SE">SERGIPE</option>
                  <option value="TO">TOCANTINS</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
              <label htmlFor="enderecoCep">CEP</label>
                <input type="text"
                 className="form-control" 
                 id="enderecoCep" 
                 placeholder="XXXXX-XXX"
                  required
                  {...register("enderecoCep")}
                 />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="telefoneNumero">Telefone para contato</label>
                <input type="number"
                  class="form-control"
                  id="telefoneNumero"
                  placeholder="9999-9999"
                  required
                  {...register("telefoneNumero")}
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

export default Cadastrar_Usuario;
