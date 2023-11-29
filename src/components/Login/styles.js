import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #FEFEFE;

  svg {
    width: 100px;
    height: 100px;
    color: #004f2d;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #61BE6D;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  background-color: #F0F4EF;
  color: #344966;
  border-radius: 5px;
`;
