import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
