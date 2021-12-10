import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;

  background-color: #ffffff;
  -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.21);
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.21);

  width: 100%;

  margin-bottom: 40px;

  padding: 20px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Content = {
  Title: styled.h1``,
  Date: styled.span``,
  Link: styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
  `,
  Description: styled.p``,
  Image: styled.img`
    height: 100%;

    max-height: 300px;
    border-radius: 8px;
  `,
};
