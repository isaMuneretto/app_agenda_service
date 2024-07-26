import { useForm } from "react-hook-form";
import { api } from "../../config_axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const Agendamento = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [aviso, setAviso] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("00:00");
  const [servicos, setServicos] = useState([]);
  const [prestador, setPrestador] = useState([]);
  const [selectedServicoNome, setSelectedServicoNome] = useState("");

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await api.get("/servicos");
        setServicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços", error);
      }
    };

    fetchServicos();
  }, []);

  const buscarPrestadoresPorNomeServico = async (servicoNome) => {
    if (!servicoNome) return;

    try {
      const response = await api.get(`/prestador/search?servicoNome=${servicoNome}`);
      setPrestador(response.data);
      console.log("prestadores lista"+response.data);

    } catch (error) {
      console.error("Erro ao buscar prestadores por nome do serviço", error);
    }
  };

  const handleServicoChange = (event) => {
    console.log("Event target value:", event.target.value);
    console.log("Servicos array:", servicos); 

     const servicoEncontrado = servicos.find(servico => servico.servicoId === parseInt(event.target.value, 10));        
     console.log("Servico encontrado:", servicoEncontrado);

    const servicoNome = servicoEncontrado?.servicoNome;
    console.log("Servico Nome:", servicoNome);

    setSelectedServicoNome(event.target.value);
    
    buscarPrestadoresPorNomeServico(event.target.value);
};

  const salvar = async (campos) => {
    try {
      const camposCompletos = {
        ...campos,
        agendamentoHora: selectedTime,
        servicos: { servicoId: watch("servicoId") }
      };
      console.log("Campos completos:", camposCompletos);
      const response = await api.post("/agendamento", camposCompletos);
      setAviso(`Agendamento realizado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao fazer agendamento!");
    }
  };

  useEffect(() => {
    console.log("Servicos:", servicos);
  }, [servicos]);


  return (
    <>
      <Helmet>
        <title>Agendamento</title>
      </Helmet>
      <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
        <div className="container p-5 bg-light text-dark rounded">
          <h4 className="fst-italic mb-3">Agendamento</h4>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="search"
                placeholder="Serviços"
                aria-label="Serviços"
                {...register("servicoNome")}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => buscarPrestadoresPorNomeServico(watch("servicoNome"))}
              >
                Pesquisar
              </button>
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("servicoId")}
              defaultValue=""
              onChange={handleServicoChange}
            >
              <option value="" disabled>Selecione um serviço</option>
              {servicos.map(servico => (
                <option key={servico.servicoId} value={servico.servicoId}>
                  {servico.servicoNome}
                </option>
              ))}
            </select>
            <br />
            <select
              className="form-select"
              aria-label="Prestadores"
              {...register("prestadorId")}
              defaultValue=""
              disabled={!selectedServicoNome}
            >
              <option value="" disabled>Selecione um prestador</option>
              {prestador.map((prestador) => (
                <option key={prestador.prestadorId} value={prestador.prestadorId}>
                  {prestador.prestadorNome}
                </option>
              ))}
            </select>
            <br />
            <div>
              <label>Escolha a data que você deseja agendar o Serviço:</label>
              <br />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </div>
            
            <h6>Selecione um horário:</h6>
            <div className="input-group mb-3">
              <input
                type="time"
                className="form-control"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-dark">Agendar</button>
          </form>
          <div className="alert mt-3">{aviso}</div>
        </div>
      </div>
    </>
  );
};

export default Agendamento;
