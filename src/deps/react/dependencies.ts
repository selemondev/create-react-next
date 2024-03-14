import options from '../../core/utils/react/options'
const router = {
    name: 'react-router-dom',
    version: '^6.22.3',
    stableVersion: '^6.22.3',
    env: 'pro'
}
const redux = {
    name: ['react-redux', '@reduxjs/toolkit'],
    version: ['^9.1.0', '^2.2.1'],
    stableVersion: ['^9.1.0', '^2.2.1'],
    env: 'pro'
}

const eslintJs = {
    name: ['eslint', 'eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-react-refresh'],
    version: ["^8.57.0", "^7.34.0", "^4.6.0", "^0.4.5"],
    stableVersion: ["^8.57.0", "^7.34.0", "^4.6.0", "^0.4.5"],
    env: ['dev', 'dev', 'dev', 'dev']
}

const eslintTs = {
    name: [
        "eslint",
        'eslint-plugin-react-hooks',
        'eslint-plugin-react-refresh',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser'
    ],
    version: ["^8.57.0", "^4.6.0", "^0.4.5", "^7.1.1", "^7.1.1"],
    stableVersion: ["^8.57.0", "^4.6.0", "^0.4.5", "^7.1.1", "^7.1.1"],
    env: ['dev', 'dev', 'dev', 'dev', 'dev']
}

const tailwind = {
    name: [
        'tailwindcss',
        'postcss',
        'autoprefixer'
    ],
    version: ['^3.4.1', '^8.4.35', '^10.4.18'],
    stableVersion: ['^3.4.1', '^8.4.35', '^10.4.18'],
    env: ['dev', 'dev', 'dev']
};

const reactHooks = {
    name: '@uidotdev/usehooks',
    version: '^2.4.1',
    stableVersion: '^2.4.1',
    env: 'pro'
}

const typescript = {
    name: [
        'typescript',
        '@types/react',
        '@types/react-dom'
    ],
    version: ['^5.2.2', '^18.2.64', "^18.2.21"],
    stableVersion: ['^5.2.2', '^18.2.64', "^18.2.21"],
    dev: ['dev', 'dev', 'dev']
}

const javascript = {
    name: [],
    version: [],
    stableVersion: [],
    dev: []
};

const tanStackReactQuery = {
    name: [
        "@tanstack/react-query",
        "@tanstack/react-query-devtools"
    ],
    version: ["^5.28.0", "^5.28.0"],
    stableVersion: ["^5.28.0", "^5.28.0"],
    dev: ['pro', 'pro']
}

const vitest = {
    name: ['vitest', 'jsdom', "@testing-library/react"],
    version: ["^1.2.2", "^24.0.0", "^14.2.1"],
    stableVersion: ["^1.2.2", "^24.0.0", "^14.2.1"],
    dev: ['dev', 'dev', 'dev']
}

const constantDevDeps = {
    name: options.useTypeScript ? typescript.name : javascript.name,
    version: options.useTypeScript ? typescript.version : javascript.version,
    stableVersion: options.useTypeScript ? typescript.stableVersion : javascript.stableVersion,
    dev: options.useTypeScript ? typescript.dev : javascript.dev
}
const constantProDeps = {
    name: ['react', 'react-dom'],
    version: ['^18.2.0', '^18.2.0'],
    stableVersion: ['^18.2.0', '^18.2.0'],
    dev: 'pro'
}
export {
    constantDevDeps,
    constantProDeps,
    tailwind,
    eslintTs,
    javascript,
    typescript,
    vitest,
    tanStackReactQuery,
    eslintJs,
    reactHooks,
    redux,
    router
}
