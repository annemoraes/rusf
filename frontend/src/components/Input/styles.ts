import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  color: #666360;
  border-radius: 5px;
  border: 1px solid #E8EBEB;
  padding: 14px;
  width: 80%;

  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px;
  }

  ${props => props.isFocused  && css`
      color: #00CCBC;
      border-color: #00CCBC;
  `}

  ${props => props.isFilled  && css`
      color: #00CCBC;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
