# Karate Frog’s Mushroom Time

try it out at https://violettomania.github.io/mushroom-time/

## Dev environment

### Setup

Lint: `npm run lint-dev`
Start dev server: `npm run start`

Recommended VSCode extension: ESLint

### Troubleshoot

- `This site can’t provide a secure connection` browser error (usually happens in non-incognito mode):
    use `http://127.0.0.1:<babel-loader port number>/` instead of `localhost:<babel-loader port number>/` when running `npm run start`