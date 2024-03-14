import options from '../core/utils/react/options';
import fs from 'fs-extra';

export function getFilterFile() {
  async function reactFilterFileActions() {
    if (!options.useRouter) {
      fs.remove(`${options.dest}/src/router`)
    }

    if (!options.useTailwind) {
      fs.remove(`${options.dest}/tailwind.config.js`);
      fs.remove(`${options.dest}/postcss.config.js`);
    };

    if (options.useTailwind) {
      fs.remove(`${options.dest}/src/assets/css/base.css`);
    }

    if (options.deploy === 'none') {
      fs.remove(`${options.dest}/netlify.toml`);
      fs.remove(`${options.dest}/vercel.json`);
    }

    if (options.deploy === "netlify") {
      fs.remove(`${options.dest}/vercel.json`);
    }

    if (options.deploy === "vercel") {
      fs.remove(`${options.dest}/netlify.toml`);
    }


    if (options.useTailwind === false) {
      fs.remove(`${options.dest}/src/assets/css/tailwind.css`);
    }

    if (options.useJavaScript) {
      fs.remove(`${options.dest}/src/main.tsx`);
    }

    if (!options.useVitest) {
      fs.remove(`${options.dest}/vitest.config.ts`);
      fs.remove(`${options.dest}/vitest.config.js`);
      fs.remove(`${options.dest}/tsconfig.vitest.json`);
      fs.remove(`${options.dest}/src/components/__tests__`);
    }

    if (!!options.stateManagement) {
      fs.remove(`${options.dest}/src/stores`)
    }

    if (!options.useEslint) {
      fs.remove(`${options.dest}/.eslintrc.cjs`)
    }
    return true
  }
  const obj = new Map([
    ['react', reactFilterFileActions],
  ])
  const res = obj.get('react');
  return res
}
