import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #61BE6D;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const newChat = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #696C75;
  padding: .5rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer; 

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`;
