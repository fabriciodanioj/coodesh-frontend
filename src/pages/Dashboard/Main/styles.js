import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px 40px;

  display: flex;

  width: 100%;

  flex-direction: column;
  align-items: center;
`;

export const Header = {
  Image: styled.img`
    max-width: 300px;

    margin-bottom: 80px;
  `,
  Container: styled.div`
    display: flex;

    width: 100%;

    flex-direction: column;
    align-items: center;
  `,
  Box: styled.div``,
  Title: styled.h1``,
};
