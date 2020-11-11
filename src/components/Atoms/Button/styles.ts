import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  enabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #04d361;
  border-radius: 8px;
  height: 60px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;

  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: ${shade(0.4, '#04d361')};
    cursor: pointer;
  }

  ${(props) => props.enabled === false
    && css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;
