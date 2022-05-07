import styled from "styled-components";

export const Container = styled.main`

  display: flex;
  flex-direction: column;
  justify-content:center ;
  align-items: center;
  height: 100vh;
   
  background-color: #121214;

`

export const FormStyles = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: solid 1px grey;
  padding: 20px;
  border-radius: 8px;

  h1 {
    color: #121214;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
  }

  label {
    color: #fff;
    padding: 15px;
    text-align: left;
    font-size: 1rem;
  }

  input {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  button {
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-size: 1rem;
    background-color: green;
    color: #fff;
    cursor: pointer;
  }

  .exit {
    background-color: red;
  }

`