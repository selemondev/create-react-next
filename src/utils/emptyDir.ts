import { existsSync, rmdirSync, unlinkSync } from 'fs'

import { postOrderDirectoryTraverse } from './directoryTraverse'

function emptyDir(dir: string) {
    if (!existsSync(dir)) {
        return
    }

    postOrderDirectoryTraverse(
        dir,
        (dir: string) => rmdirSync(dir),
        (file: string) => unlinkSync(file)
    )
}
export default emptyDir
