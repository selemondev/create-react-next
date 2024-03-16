import options from './options'

const templateFilesMap = new Map()
templateFilesMap.set('react', reactFetchTemplateFiles)
export function reactFetchTemplateFiles(): string[] | any[] {
    const files = [
        'package.json',
        options.useTypeScript ? 'src/main.tsx' : 'src/main.jsx',
        options.useTypeScript ? 'src/App.tsx' : 'src/App.jsx',
        options.useTypeScript ? 'vite.config.ts' : 'vite.config.js',
        options.useTypeScript ? 'src/components/TheWelcome.tsx' : 'src/components/TheWelcome.jsx'
    ]
    return files.filter(Boolean)
}
export { templateFilesMap }
