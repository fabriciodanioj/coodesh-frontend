import styled, { css, keyframes } from 'styled-components';

import { darken } from 'polished';
import fadeIn from 'react-animations/lib/fade-in';
import Loader from 'react-loader-spinner';

import ripple from '~/styles/animations/ripple';
import button, { colors, sizes } from '~/styles/configs/button';

const config = (value, variant = 'default', transparent = false) => {
  const c = colors[variant];

  return c[value] === 'transparent' && !transparent ? c.color : c[value];
};

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.button`
  ${ripple};
  animation: 800ms ${fadeInAnimation};

  -webkit-appearance: none;
  cursor: pointer;

  text-align: center;

  transition: background-color 200ms linear, box-shadow 200ms linear,
    border-color 200ms linear;

  border-radius: ${button.borderRadius};

  ${({ size }) => {
    const s = sizes[size];

    return css`
      font-size: ${s.fontSize};
      padding: ${s.padding};
      font-weight: ${s.fontWeight};
    `;
  }}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer: normal;
      opacity: 60%;
    `}

  ${({ color, variant }) => {
    if (variant === 'link') {
      return css`
        color: ${config('background', color)};
        background: transparent;
        border: 0;

        &:not(:disabled):hover {
          color: ${darken(0.2, config('background', color))};
        }
      `;
    }
    if (variant === 'outline') {
      return css`
        color: ${config('background', color)};
        background: transparent;
        border: 1.5px solid ${config('border', color)};

        &:not(:disabled):hover {
          border-color: ${darken(0.2, config('border', color))};
          color: ${darken(0.2, config('background', color))};
        }
      `;
    }
    return css`
      color: ${config('color', color, true)};
      background: ${config('background', color, true)};
      border: 1px solid ${config('border', color, true)};

      &:not(:disabled):hover {
        border-color: ${darken(0.2, config('border', color, true))};
        background: ${darken(0.2, config('background', color, true))};
      }
    `;
  }}}
`;

export const LoaderComponent = styled(Loader)`
  margin-bottom: 0px;
  margin: auto;
  svg {
    margin-bottom: 0px !important;
  }
`;
