import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErroded: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  color: #666360;
  border-radius: 5px;
  border: 1px solid #e8ebeb;
  padding: 14px;
  width: 90%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErroded &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #00ccbc;
      border-color: #00ccbc;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00ccbc;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
