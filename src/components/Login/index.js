import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import { BsFillChatTextFill } from "react-icons/bs";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.LoginBox>
        <BsFillChatTextFill />
        <h1 style={{color: '#F0F4EF'}}>GB Chat</h1>
        <p style={{color: '#696C75', fontWeight: 'bold'}}>Conecte-se com sua conta do Google</p>
        <C.Button onClick={handleSignin}>Login com Google</C.Button>
      </C.LoginBox>
    </C.Container>
  );
};

export default Login;
