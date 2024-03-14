interface Options {
    templatePath?: string
    Router?: string
    Tailwind?: string
    TypeScript?: string
    JavaScript?: string
    UseHooks?: string
    Redux?: string
    Recoil?: string
    Zustand?: string
    Eslint?: string
    Vitest?: string
    TanStackReactQuery?: string
    name?: string
    version?: string
    src?: string
    dest?: string
    allPackages?: any[]
    package?: 'bun' | 'pnpm' | 'npm' | 'yarn' | 'none'
    deploy?: 'netlify' | 'vercel' | 'none',
    stateManagement?: 'redux' | 'recoil' | 'zustand',
    useEslint?: boolean
    useEslintTs?: boolean
    useRouter?: boolean
    useReactQuery?: boolean
    useTailwind?: boolean
    useTypeScript?: boolean
    useHooks?: boolean
    useJavaScript?: boolean
    useTanStackReactQuery?: string
    useVitest?: string
    useGitInit?: boolean
    EslintScript?: string
    constantDevDeps?: string
    constantProDeps?: string
  }
  
  const options: Options = {}
  export default options