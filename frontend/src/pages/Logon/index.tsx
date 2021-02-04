import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import bannerImg from '../../assets/banner.svg';

export default function Logon() {
  const [user, setUser] = useState('');
  const history = useHistory();

  function handleLogin(e:any) {
    e.preventDefault();

    localStorage.setItem('Username', user);

    history.push('/admin');
    
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>
        </form>
      </section>

      <img src={bannerImg} alt="banner" width="80%" />
    </div>
  );
}
