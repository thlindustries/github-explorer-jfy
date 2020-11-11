import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 48px 164px;
`;

export const Heading = styled.div`
  strong {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bolder;
    color: #ee7656;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  margin-top: 54px;
`;

export const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 8px 8px 0;
  width: 120px;
`;
