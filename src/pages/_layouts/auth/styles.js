import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 320px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    border: 0;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    background: #fff;
    border: 0;
    border-radius: 4px;
    height: 40px;
    color: #666;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#fff')};
    }
  }

  a {
    margin-top: 10px;
    color: #eee;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.08, '#eee')};
    }
  }
`;
