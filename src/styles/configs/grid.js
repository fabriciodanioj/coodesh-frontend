const breakpoints = [600, 960, 1280, 1920];

export const sizes = {
  xs: `(max-width: ${breakpoints[0] - 1}px)`,
  sm: `(max-width: ${breakpoints[1] - 1}px)`,
  md: `(max-width: ${breakpoints[2] - 1}px)`,
  lg: `(max-width: ${breakpoints[3] - 1}px)`,
  xl: `(min-width: ${breakpoints[3]}px)`,

  only: {
    sm: `(min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[1] - 1
      }px)`,
    md: `(min-width: ${breakpoints[1]}px) and (max-width: ${breakpoints[2] - 1
      }px)`,
    lg: `(min-width: ${breakpoints[2]}px) and (max-width: ${breakpoints[3] - 1
      }px)`,
  },
};

export default {};
