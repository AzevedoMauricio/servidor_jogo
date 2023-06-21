import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #023535;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

export const InputWrapper = styled.form`
  width: 50%;
  background-color: #0fc2c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Input = styled.input`
  width: 70%;
  background-color: #0fc2c0;
  height: 50px;
  font-size: 24px;
  color: #fff;
  border-radius: 10px;
  border: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  background-color: #0fc2c0;
  height: 50px;
  border: 0;
  color: #fff;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: #015958;
  }
`;

export const Message = styled.small`
  width: 100%;
  text-align: center;
`;
