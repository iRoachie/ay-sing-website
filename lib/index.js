import { css } from 'styled-components';

const breakpoints = {
  xsmall: 321,
  small: 767,
  medium: 992,
  large: 1199,
  xlarge: 143,
};

export const media = size => styles => {
  return css`
    @media (min-width: ${breakpoints[size] / 16}em) {
      ${styles};
    }
  `;
};
