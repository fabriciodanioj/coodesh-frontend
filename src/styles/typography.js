import React from 'react';

import styled, { css } from 'styled-components';

import getColor from '~/utils/getColor';

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.dark.main};
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  color: ${(props) =>
    (props.blue && props.theme.text.dark.blue) || props.theme.text.dark.main};
  font-size: 22px;
  font-weight: 600;
`;

export const Label = styled.h3`
  color: ${({ theme }) => theme.text.dark.main};
  font-size: 16px;
  font-weight: 500;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => getColor(props)};
  font-size: ${(props) => {
    if (props.xs) return '13';
    if (props.sm) return '14';
    if (props.lg) return '18';
    if (props.xl) return '24';
    return '16';
  }}px;

  font-weight: ${({ weight }) => weight || 500};

  margin: ${({ margin }) => margin || '0px'};

  ${({ textWrap }) =>
    textWrap &&
    css`
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: center;
    `}

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}

  ${({ center }) =>
    (center &&
      css`
        justify-content: center;
        text-align: center;
      `) ||
    css`
      -webkit-box-align: start;
    `}
  
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        filter: brightness(85%);
      }
    `}
  
  ${({ clamp }) =>
    clamp &&
    css`
      /* display: -webkit-box; */
      -webkit-line-clamp: ${clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;

export const HeaderText = ({ children, ...rest }) => (
  <Text xs uppercase {...rest}>
    {children}
  </Text>
);
