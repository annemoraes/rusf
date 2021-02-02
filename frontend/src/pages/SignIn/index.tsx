import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Wave, BackgroundImg } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import WaveImg from '../../assets/wave.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu Login</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Content>
    <BackgroundImg />
  </Container>
);

export default SignIn;
