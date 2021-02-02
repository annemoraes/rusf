import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Wave, BackgroundImg } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import WaveImg from '../../assets/wave.svg';

const SignIn: React.FC = () => {

  const handleSubmit = useCallback( async (data : object) => {
    try{
      const schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err){
      console.log(err);
    }
  }, []);

  return(
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
          <a href="login">
            <FiLogIn />
            Criar conta
          </a>
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  );
};

export default SignIn;
