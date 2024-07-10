import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_Prestador = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

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
        prestador: {
          prestadorId: prestadorId
        },
        telefoneNumero: campos.telefoneNumero,
      });

      setAviso("Prestador e telefone cadastrado com sucesso!");
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar prestador!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro de Prestadores</title>
      </Helmet>
      <div className="container-fluid bg-light text-dark min-vh-100 d-flex align-items-center">
        <div className="container p-4 bg-body-secondary text-dark rounded">
          <h4 className="fst-italic mb-3">Preencha o formulário para se cadastrar</h4>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="prestadorNome">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prestadorNome"
                    required
                    autoFocus
                    {...register("prestadorNome")}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prestadorCpf">CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prestadorCpf"
                    required
                    {...register("prestadorCpf")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="prestadorEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="prestadorEmail"
                    placeholder="exemple@exemple.com"
                    required
                    {...register("prestadorEmail")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="prestadorSenha">Senha</label>
                  <input
                    type="prestadorSenha"
                    className="form-control"
                    id="prestadorSenha"
                    required
                    {...register("prestadorSenha")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="prestadorCnpj">CNPJ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prestadorCnpj"
                    required
                    {...register("prestadorCnpj")}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prestadorRazaoSocial">Razão Social</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prestadorRazaoSocial"
                    required
                    {...register("prestadorRazaoSocial")}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone para contato</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefone"
                    placeholder="9999-9999"
                    required
                    {...register("telefoneNumero")}
                  />
                </div>
              </div>
            </div>
            {/* 
            <div className="row mb-3">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="rua">Rua</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rua"
                    placeholder="Av, Rod, Rua..."
                    required
                    {...register("rua")}
                  />
                </div>
              </div>
              <div className="col-1">
                <div className="form-group">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="number"
                    className="form-control"
                    id="numero"
                    placeholder="123..."
                    required
                    {...register("numero")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cidade"
                    placeholder="Insira a sua cidade"
                    required
                    {...register("cidade")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="bairro">Bairro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bairro"
                    placeholder="Insira o seu bairro"
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
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cep"
                    placeholder="XXXXX-XXX"
                    required
                    {...register("cep")}
                  />
                </div>
              </div>
            </div>
            */}
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

export default Cadastrar_Prestador;
