import packageManager from './packageManager'
import projectName from './projectName'
import deploy from './deploy'
import { runPrompt } from '.'
import createQuestion from './createQuestion'
import initializeGit from "./initGit"
import { logger } from '../../../utils/logger'
import options from '../../utils/react/options'
import tailwindPrompt from "./tailwind";
import typeScriptPrompt from "./typescript";
import eslintPrompt from "./eslint"
import stateManagement from './stateManagement'
import reactQuery from './reactQuery'
import program from '../../program'
async function createReactQuestions(): Promise<void> {
  try {
    options.name = program.args[0] ?? (await createQuestion(projectName)).name;
    
    if (!options.useTypeScript) {
      await createQuestion(typeScriptPrompt)
    }
    if (!options.useTailwind) {
      await createQuestion(tailwindPrompt)
    }
    await createQuestion(stateManagement)
    await runPrompt();
    await createQuestion(reactQuery)

    if (!options.useEslint) {
      await createQuestion(eslintPrompt)
    }

    if (!options.package) {
      await createQuestion(packageManager)
    }

    await createQuestion(deploy);

    await createQuestion(initializeGit);

  } catch (error) {

    if (error instanceof Error) {

      logger.error(error.message);

      process.exit(1);

    }
  }

  return Promise.resolve()
}

export default createReactQuestions