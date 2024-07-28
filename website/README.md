# Task 1 - Website interview assignment

- Total finished time for task 1: 1.5 hours
- Total finished time for setup other conventions: 1 hours

## Overview

- Framework: [NextJS v14+ (App Router)](https://nextjs.org/docs)
- Component library: [Material UI](https://mui.com/material-ui/getting-started/overview/)
- Data Fetching: [SWR + fetch](https://swr.vercel.app/). In this project, I just simply
  use the mock data, I also create a provider for SWR and a sample hook to fetch the data.
- Package manager: [pnpm](https://pnpm.io)
- Editor: [vscode](https://code.visualstudio.com/download)
- CI/CD: [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- Deployment: [Docker v24+](https://www.docker.com/)
- Commit Lints
  - [husky](https://typicode.github.io/husky/)
  - [eslint](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)
  - [prettier](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier)
  - [lint-staged](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged)
- Recommended Chrome extension:
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [SWR DevTools](https://chrome.google.com/webstore/detail/swr-devtools/liidbicegefhheghhjbomajjaehnjned)

## Getting Started

```bash
# Prerequisites
- Node.js v14 or higher
- pnpm package manager

# Install dependencies
pnpm install

# Start in development mode
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Link of the assignment result: http://localhost:3000/recipes/1/dish/1

## Project Structure

- `public` -- Public assets like images, media files,...
- `src` -- Source code
  - `app` -- **NextJS App Directory**
    - `_providers` -- List of providers that we will used in this project like Theme and
      SWR
  - `components` -- **React Components**
    - `<page-name>` -- Contains components used in the page
      - `<component-name>.tsx` -- UI components
    - `layout` -- Large components which are wrap around page components
    - `shared` -- Smaller components which are shared among pages
  - `config` -- App configuration variables
  - `hooks` --
    [React custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) for
    fetching or processing data or states. I created a sample API GET hook, for each API
    we will create a hook to get the data.
  - `mocks` -- used for mocking
  - `utils` -- Helpers functions to process data

## Production

```bash
# Prerequisites
- Docker v20.10 or higher
- Docker Compose v1.29 or higher

# Run the following Docker command to build and run the application in production mode
docker compose up -d
```
