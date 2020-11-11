import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  hasValue: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 8px 0 0 8px;

  display: flex;
  align-items: center;

  padding: 16px;
  width: 100%;

  border: 2px solid #fff;
  color: #949494;

  & + div {
    margin-top: 8px;
  }
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  transition: border 0.4s, box-shadow 0.4s;

  ${(props) => props.hasError
    && css`
      border: 2px solid #c53030;
    `}

  ${(props) => props.isFocused
    && css`
      border: 2px solid #009c46;
      color: #009c46;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    `}

  ${(props) => props.hasValue
    && css`
      border: 2px solid #009c46;
      color: #009c46;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: #000;
    font-weight: bold;
    &::placeholder {
      color: #949494;
    }

    margin-right: 40px;
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 900px) {
    width: 300px !important;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin-right: 0px;
  }

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const EyePassword = styled.div`
  height: 20px;

  svg {
    margin-right: 0px;
    color: #b4bad4;

    transition: color 0.4s;

    &:hover {
      cursor: pointer;
      color: #ffa22b;
    }
  }
`;
