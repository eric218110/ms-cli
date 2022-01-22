import { execSync } from 'child_process'

export const executeComand = (command = '') => {
  try {
    execSync(command, { stdio: 'ignore' })
    return true
  } catch (e) {
    return false
  }
}
