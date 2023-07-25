import styled from 'styled-components';

export const MovieStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const AditionalStyled = styled.div`
  border: 1px solid blue;
  /* border-bottom: 1px solid black; */
  box-shadow: 0px 10px 7px #ccc, 0px 0px 5px #ccc;
  padding: 0 16px;
  color: #3f51b5;
  font-size: 16px;
`;

export const ButtonBack = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  margin-left: 12px;
  border-radius: 6px;
  border: none;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  background-color: #3f51b5;
  cursor: pointer;
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  input {
    width: 400px;
    height: 30px;
    font-size: 16px;
    margin-right: 10px;
    border: 1px solid #3f51b5;
    border-radius: 8px;
  }

  button {
    padding: 10px 16px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #3f51b5;
    cursor: pointer;
  }
`;
