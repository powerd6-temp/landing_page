# powerd6/landing_page

The landing page for the project.

## Development setup

After getting this repository, you can run the following commands:

### Commands

| Command           | What it does                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------- |
| `npm run build`   | Builds the website into it's publishable form, on the `/dist` repository.                     |
| `npm run preview` | Builds the website, then serves it on [`localhost:4321`](http://localhost:4321).              |
| `npm run start`   | Launches the website on your machine, available on [`localhost:4321`](http://localhost:4321). |
| `npm run dev`     | Launches the website on your machine, available on [`localhost:4321`](http://localhost:4321). |
| `npm run test`    | Launches the automated suite of tests.                                                        |
| `npm run astro *` | Runs [`astro`](https://docs.astro.build/en/reference/cli-reference/) commands.                |

### Continuous Delivery

This project follows the continuous delivery definition shared on [minimumcd.org](https://minimumcd.org/minimumcd/).

[![Continuous Delivery](https://github.com/powerd6/landing_page/actions/workflows/cd.yml/badge.svg?branch=main&event=push)](https://github.com/powerd6/landing_page/actions/workflows/cd.yml)

This means that:
- All pull requests are built and tested;
- All merges to `main` are built, tested, and deployed;
- All merges to `main` are integrated into open branches (via `git rebase`);

## Technology Stack

This website is built with the following technologies:

- [Astro](https://astro.build/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
  - [`expect-axe-playwright`](https://github.com/Widen/expect-axe-playwright)
- [GitHub Actions](https://github.com/features/actions)
- [Visual Studio Code](https://code.visualstudio.com/)
