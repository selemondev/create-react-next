import { existsSync, readdirSync } from 'fs-extra'
import { resolve } from 'path'

export default function (name: string): boolean {
  const targetDir = resolve(process.cwd(), name);

  if (!existsSync(targetDir)) {
    return true
  }

  const files = readdirSync(targetDir)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}
