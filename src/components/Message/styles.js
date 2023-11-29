import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #60BE6C;
      border-radius: 10px 0px 10px 10px;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #79C1EB;
  border-radius: 0 10px 10px 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 80%;
  color: #FEFEFE;
`;

export const Message = styled.span`
  font-size: 18px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #FEFEFE;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;
