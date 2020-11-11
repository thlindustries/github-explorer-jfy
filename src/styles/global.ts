import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;

    &::-webkit-scrollbar {
      display: none;
    }

    @media(max-width: 1190px){
      body{
        min-width: 1190px;
      }
    }

  }

  body{
    -webkit-font-smoothing: antialiased;
    background: rgba(176, 176, 176,0.29);
  }

  body,input,button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
