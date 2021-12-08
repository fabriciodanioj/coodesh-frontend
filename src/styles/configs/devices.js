export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  sm: '600px',
  tablet: '768px',
  md: '960px',
  laptop: '1280px',
  laptopL: '1920px',
  desktop: '2560px',
};

export const max = {
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  sm: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktop})`,
};

export default {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  sm: `(min-width: ${sizes.sm})`,
  md: `(min-width: ${sizes.md})`,

  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`,
};
