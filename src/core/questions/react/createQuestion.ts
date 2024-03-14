import options from '../../utils/react/options'
import prompts from 'prompts'

export default async function createQuestion(question: any) {
  const result = await prompts(question, {
    onCancel: () => {
      throw new Error('❌ ' + ' Operation cancelled')
    }
  })
  Object.assign(options, result)

  return Promise.resolve(options)
};