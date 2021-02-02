import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 630px;

  img {
    padding-top: 15px;
  }
  form {
    margin: 80px 0;
    width: 380px;
    height: 500px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;

    h1 {
      margin-bottom: 24px;
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


