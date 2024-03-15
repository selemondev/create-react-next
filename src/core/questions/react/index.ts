import prompts from './prompts'
import options from '../../utils/react/options'
import {
  lintMap,
  packageJsonMap,
} from '../../utils/react/ejsMapConstant'
import createQuestion from './createQuestion';

async function getReactProperty() {
  const Eslint = packageJsonMap.get('eslintJs');
  const EslintTs = packageJsonMap.get('eslintTs');
  const Vitest = packageJsonMap.get('vitest');
  const TanStackReactQuery = packageJsonMap.get('tanStackReactQuery');
  const Router = packageJsonMap.get('router');
  const Redux = packageJsonMap.get('redux');
  const Jotai = packageJsonMap.get('jotai');
  const Zustand = packageJsonMap.get('zustand');
  const Tailwind = packageJsonMap.get('tailwind');
  const TypeScript = packageJsonMap.get('typescript');
  const JavaScript = packageJsonMap.get('javascript');
  const UseHooks = packageJsonMap.get('useHooks');

  resolveOptions(options, packageJsonMap)

  resolveOptions(options, lintMap)

  options.constantDevDeps = packageJsonMap.get('constantDevDeps')
  
  options.constantProDeps = packageJsonMap.get('constantProDeps')

  options.Eslint = options.useTypeScript ? EslintTs : Eslint

  options.Vitest = Vitest

  options.Router = Router

  options.Jotai = Jotai

  options.Zustand = Zustand

  options.TanStackReactQuery = TanStackReactQuery

  options.Redux = Redux

  options.UseHooks = UseHooks;

  options.Tailwind = Tailwind;

  options.TypeScript = TypeScript

  options.JavaScript = JavaScript

  options.useEslintTs = options.useTypeScript

  options.useJavaScript = options.useTypeScript === false;

  return Promise.resolve(true)
}
export async function runPrompt() {

  await createQuestion(prompts)

  await getReactProperty()
}

function resolveOptions(originOptions: any, configMap: Map<string, string>) {
  Array.from(configMap.keys()).forEach((item: string) => {
    originOptions[item] = configMap.get(item)
  })
}
