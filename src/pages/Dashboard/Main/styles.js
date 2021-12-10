import styled from 'styled-components';

import fadeIn from '~/styles/animations/fadeIn';

export const Container = styled.div`
  ${fadeIn};
  padding: 80px 20px 40px;

  display: flex;

  width: 100%;

  flex-direction: column;
  align-items: center;
`;

export const Header = {
  Image: styled.img`
    max-width: 250px;
  `,

  Box: styled.div``,
  Title: styled.h1``,
};
