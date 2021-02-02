import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #00ccbc;
  height: 56px;
  border-radius: 5px;
  border: 0;
  padding: 0 14px;
  color: #fff;
  width: 80%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#00CCBC')};
  }
`;
