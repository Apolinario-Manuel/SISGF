import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewOffice() {
  const [descricao, setDescricao] = useState('');

  const history = useHistory();

  async function handleNewOffice(e:any) {
    e.preventDefault();

    const data = {
      descricao
    };

    try {
      await api.post('office', data)

      history.push('/admin');
    } catch (err) {
      alert('Erro ao cadastrar cargo, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Cadastrar novo cargo</h1>
          
          <Link className="back-link" to="/admin">
            <FiArrowLeft size={16} color="#6C63FF" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewOffice}>
          <textarea 
            placeholder="Descrição do cargo"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}