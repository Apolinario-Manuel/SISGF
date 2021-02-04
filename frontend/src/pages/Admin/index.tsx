import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Admin() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [cargos, setCargos] = useState([]);

  const history = useHistory();

  const userName = localStorage.getItem('Username');

  useEffect(() => {
    api.get('employee').then(response => {
      setFuncionarios(response.data);
    })

    api
      .get(
        `office`
      )
      .then((response) => {
        setCargos(response.data);
      });
  }, [userName]);

  async function handleDeleteFuncionario(id: any) {
    try {
      await api.delete(`employee/${id}`);

      setFuncionarios(funcionarios.filter((funcionario: any) => funcionario.id !== id));
    } catch (err) {
      alert('Erro ao deletar Funcionario, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }


  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo" />
        <span>Bem vindo(a), {userName}</span>

        <Link className="button" to="/office/new"> + Novo Cargo</Link>
        <Link className="button" to="/register" style={{marginLeft: "8px"}}> + Novo Funcionário</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#6C63FF" />
        </button>
      </header>

      <h1>Funcionários cadastrados</h1>

      <ul>
        {funcionarios.map((funcionario: any) => {

          let item:any = cargos.filter((cargo: any) => cargo.id == funcionario.cargo_id)
          let data = funcionario.data_nascimento.split('T')[0]
          
          return (
            <li key={funcionario.id}>
              <strong>Nome:</strong>
              <p>{funcionario.nome} {funcionario.sobrenome}</p>

              <strong>Cargo:</strong>
              <p>{item[0]?.descricao}</p>

              <strong>Data de Nascimento:</strong>
              <p>{data}</p>

              <strong>Salario:</strong>
              <p>{funcionario.salario}</p>
              
              <button onClick={() => handleDeleteFuncionario(funcionario.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}