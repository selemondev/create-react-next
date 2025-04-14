import options from '../core/utils/react/options';
import { remove } from 'fs-extra';

export function getFilterFile() {
  async function reactFilterFileActions() {
    if (!options.useRouter) {
      remove(`${options.dest}/src/pages`)
    }

    if (!options.useTailwind) {
      remove(`${options.dest}/tailwind.config.js`);
      remove(`${options.dest}/postcss.config.js`);
      remove(`${options.dest}/src/assets/css/tailwind.css`);
    };

    if (options.useTailwind) {
      remove(`${options.dest}/src/assets/css/base.css`);
    }

    if (options.deploy === 'none') {
      remove(`${options.dest}/netlify.toml`);
      remove(`${options.dest}/vercel.json`);
    }

    if (options.deploy === "netlify") {
      remove(`${options.dest}/vercel.json`);
    }

    if (options.deploy === "vercel") {
      remove(`${options.dest}/netlify.toml`);
    }


    if (options.useTailwind === false) {
      remove(`${options.dest}/src/assets/css/tailwind.css`);
    }

    if (options.useJavaScript) {
      remove(`${options.dest}/src/main.tsx`);
    }

    if (!options.useVitest) {
      remove(`${options.dest}/vitest.config.ts`);
      remove(`${options.dest}/vitest.config.js`);
      remove(`${options.dest}/tests`);
    }

    if (options.stateManagement === 'none') {
      remove(`${options.dest}/src/store`)
      remove(`${options.dest}/src/app`)
      remove(`${options.dest}/src/features`)
    }

    if (options.stateManagement === 'jotai') {
      remove(`${options.dest}/src/app`)
      remove(`${options.dest}/src/store`)
      remove(`${options.dest}/src/features`)
    }


    if (options.stateManagement === 'zustand') {
      remove(`${options.dest}/src/app`)
      remove(`${options.dest}/src/store/appStore.ts`)
      remove(`${options.dest}/src/store/appStore.js`)
      remove(`${options.dest}/src/features`)
    }

    if (options.stateManagement === 'redux') {
      remove(`${options.dest}/src/store/store.ts`)
      remove(`${options.dest}/src/store/store.js`)
    }

    if (!options.useEslint) {
      remove(`${options.dest}/.eslintrc.cjs`)
    }
    return true
  }
  const obj = new Map([
    ['react', reactFilterFileActions],
  ])
  const res = obj.get('react');
  return res
}
