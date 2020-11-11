import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  img {
    width: 84px;
    height: 84px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  position: relative;
  align-items: center;
  background: #fff;

  padding: 16px;

  -webkit-box-shadow: 11px 11px 19px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 11px 11px 19px 0px rgba(0, 0, 0, 0.26);
  box-shadow: 11px 11px 19px 0px rgba(0, 0, 0, 0.26);

  border-radius: 12px;
  border: solid 2px gray;

  transition: background-color 0.4s, transform 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: translateX(10px);
    cursor: pointer;
  }
`;

export const RepoInfo = styled.div`
  margin-left: 32px;

  width: 100%;
  height: calc(100%+32);

  h1 {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 22px;

    margin-bottom: 8px;
  }
  h3 {
    font-family: 'Roboto';
    font-weight: bold;
    color: #636363;
    font-size: 18px;

    margin-bottom: 4px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 8px;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: bolder;
  }
`;

export const GoToWrapper = styled.div`
  margin-left: auto;
`;

export const FavoriteContainer = styled.div`
  margin-left: 30px;

  transition: transform 0.4s;

  &:hover {
    cursor: pointer;

    transform: scaleX(1.4) scaleY(1.4);
  }
`;
