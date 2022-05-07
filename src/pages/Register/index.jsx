import React from 'react';
import { FormStyles } from './styles';

export default function Register({ authenticated, setAuthenticated }) {

  // const schema = yup.object().shape({

  // });

  return (
    <>

      <FormStyles>
        <label> 
          Nome
          <input type="text" name="name" placeholder='Digite seu nome' />
        </label>
        <label> 
          Email
          <input type="text" name="name" placeholder='Digite seu nome' />
        </label>
        <label> 
          Nome
          <input type="text" name="name" placeholder='Digite seu nome' />
        </label>
        <label> 
          Nome
          <input type="text" name="name" placeholder='Digite seu nome' />
        </label>
      </FormStyles>

    </>
  );
};
