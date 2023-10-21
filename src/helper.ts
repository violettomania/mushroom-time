/* eslint-env node */
export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? 'src/assets/'
    : '_site/assets/';
};
