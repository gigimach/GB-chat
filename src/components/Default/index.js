import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>GB Chat</C.Title>
      <C.Info>
        Clique no botão "Novo Chat" para iniciar uma conversa. Para sair clique na foto de  perfil.
      </C.Info>
    </C.Container>
  );
};

export default Default;
