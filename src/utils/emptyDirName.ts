import fs from 'fs-extra'
import { resolve } from 'path'

export default function (name: string): boolean {
  const targetDir = resolve(process.cwd(), name);

  if (!fs.existsSync(targetDir)) {
    return true
  }

  const files = fs.readdirSync(targetDir)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}
