import options from '../../../core/utils/react/options'
import emptyDirName from '../../../utils/emptyDirName'
import { validatePackageName } from "../../../utils/validatePackageName"
const defaultProjectName = 'create-react-next'

const packageName = [
    {
        name: 'projectName',
        type: 'text',
        message: 'What should we call your project?',
        initial: defaultProjectName,
        validate: (name: string) => {
            const validation = validatePackageName(name)
            if (validation.valid) {
                options.name = name;
                return true
            }
            return 'Invalid project name: ' + validation.problems[0]
        },
        active: 'Yes',
        inactive: 'No'
    },
    {
        name: 'overwrite',
        type: () => (options.name && emptyDirName(options.name) ? null : 'confirm'),
        message: () => {
            return `Directory "${options.name}" is not empty. Do you want to overwrite it?`
        }
    },
    {
        name: 'overwrite',
        type: (prev: string, values: { overwrite: boolean }) => {
            if (values.overwrite === false) {
                throw new Error('Operation cancelled')
            }
            return null
        }
    }
]
export default packageName