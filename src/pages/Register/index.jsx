import React          from 'react';
import { Link } from 'react-router-dom';
import { Container, FormStyles } from './styles';

export default function Register({ authenticated, setAuthenticated }) {

  // const schema = yup.object().shape({

  // });

  return (
    <Container>

      <FormStyles>
        <h1> Cadastre-se </h1>
        <label> 
          Nome
          <input 
            type="text" 
            name="name"   
            placeholder='Digite seu nome' 
          />
        </label>
        <label> 
          Email
          <input 
            type="text" 
            name="email" 
            placeholder='Digite seu email' 
          />
        </label>
        <label> 
          Senha
          <input 
            type="password" 
            name="password" 
            placeholder='Digite seu nome' 
          />
        </label>
        <label> 
          Confirme a senha
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder='Digite seu nome' 
          />
        </label>
        <div>
          <button> Enviar </button>
          <Link to='/login'>
            <button className='exit'>Cancelar</button>
          </Link>
        </div>
      </FormStyles>
    </Container>
  );
};
