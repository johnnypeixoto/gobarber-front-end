import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar Conta</Link>
      </form>
    </>
  );
}
