import { BASE_URL_REPO_TEMPLATE_MS } from '@utils/contants'
import { executeComand } from '@utils/execute'
import ora from 'ora'

export const cloneMS = async ({ name } = { name: '' }) => {
  if (name) {
    const spinner = ora('Clonando MS')
    spinner.color = 'cyan'
    spinner.start()
    const isExecutedComand = executeComand(
      `git clone ${BASE_URL_REPO_TEMPLATE_MS} ${name}`
    )
    if (isExecutedComand) {
      spinner.succeed('Clone realizado com sucessso')
      return true
    } else {
      spinner.stop()
      return false
    }
  }
  return false
}
