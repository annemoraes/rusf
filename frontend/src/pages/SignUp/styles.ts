import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/event.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wave = styled.div`
  z-index: -5;
  display: flex;
  margin-top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 730px;

  img {
    padding-top: 15px;
  }
  form {
    margin: 80px 0;
    width: 380px;
    height: 450px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;

    h1 {
      margin-bottom: 18px;
      color: #244274;
    }

    a {
      color: #244274;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;

      svg {
        margin-right: 14px;
      }

      &:hover {
        color: ${shade(0.2, '#244274')};
      }
    }
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
