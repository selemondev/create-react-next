import * as dependencies from '../../../deps/react/dependencies'
import options from './options'
interface Dependency {
  name: string | string[],
  version: string | string[]
};

interface Dependencies {
  [key: string]: Dependency
}
const packageJsonMap = new Map();
const deps: Dependencies = dependencies;
Object.keys(deps).forEach((item: string) => {
  const name = deps[item].name;
  if (Array.isArray(name)) {
    let res = ''
    name.forEach((cur: string, index: number) => {
      res += `"${cur}":"${deps[item].version[index]}",`
    })
    packageJsonMap.set(item, res)
  } else {
    packageJsonMap.set(
      item,
      `"${deps[item].name}":"${deps[item].version}",`
    )
  }
})

const lintMap = new Map([
  [
    'EslintScript',
    '"lint": "eslint . --ext ts,tsx,js,jsx --report-unused-disable-directives --max-warnings 0",'
  ],

  [
    'VitestScript',
    '"test:unit": "vitest",'
  ]
])


export {
  lintMap,
  packageJsonMap
}
