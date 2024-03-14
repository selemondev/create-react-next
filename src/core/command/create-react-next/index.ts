import createReactQuestions from '../../questions/react/createReactQuestions'
import initialLog from './initialLog'
import installDeps from './install'
import copyTemplate from './copyTemplate'
async function createProject() {
  await initialLog()
  await createReactQuestions()
  await copyTemplate()
  await installDeps();
}
export default async function createReactNext() {
  await createProject()
}
