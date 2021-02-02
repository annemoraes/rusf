import styled from 'styled-components';

export const Container = styled.div`
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
