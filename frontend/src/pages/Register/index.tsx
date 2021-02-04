import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cargo, setCargo] = useState();
  const [cargos, setCargos] = useState([]);
  const [data, setData] = useState('');
  const [salario, setSalario] = useState('');

  const history = useHistory();

  React.useEffect(() => {
    api
      .get(
        `office`
      )
      .then((response) => {
        setCargos(response.data);
      });
  }, []);

  async function handleRegister(e:any) {
    e.preventDefault();

    const dados = {
      nome,
      sobrenome,
      cargo_id: cargo,
      data_nascimento: data,
      salario,
    };

    try {
      const response = await api.post('employee', dados);

      history.push('/admin');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Cadastro</h1>
          <p>Faça aqui o Cadastro dos funcionários.</p>

          <Link className="back-link" to="/admin">
            <FiArrowLeft size={16} color="#6C63FF" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input 
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />

          <select value={cargo} onChange={(e:any) => setCargo(e.target.value)} style={{backgroundColor: "#fff"}} >
            <option value=''>Selecione o cargo</option>
            {
              cargos.map((item:any, index) => <option value={item.id} key={index} > {item.descricao} </option> )
            }
          </select>

          <input 
            placeholder="Data de Nascimento:  ano-mm-dd"
            value={data}
            onChange={e => setData(e.target.value)}
          />

          
          <input 
            placeholder="Salario"
            value={salario}
            onChange={e => setSalario(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}