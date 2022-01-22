import { promisify } from 'util'
import { access, constants } from 'fs'
import ora from 'ora'
import { projectInstall } from 'pkg-install'
import { get } from 'node-emoji'
import inquirer from 'inquirer'
import { exit } from 'process'

export const installPackages = async ({ name } = { name: '' }) => {
  const accessCD = promisify(access)

  try {
    await accessCD(name, constants.R_OK)

    const packageSelected = await inquirer.prompt([
      {
        type: 'list',
        choices: ['Yarn', 'NPM'],
        name: 'value',
        message: `Instalar utilizando ?`
      }
    ])

    const { value = '' } = packageSelected
    const spinnerInstall = ora(`Instalando dependências utilizando: ${value}`)
    spinnerInstall.color = 'cyan'
    spinnerInstall.start()
    projectInstall({
      prefer: value.toLowerCase() ?? 'npm',
      cwd: name
    })
      .then((s) => {
        spinnerInstall.succeed('Dependências instaladas com successo')
        success({ name })
      })
      .catch(() => {
        exit(1)
      })
  } catch (err) {
    console.error('Erro on create project')
    process.exit(1)
  }
}

const success = ({ name = '' }) => {
  console.log()
  console.log(
    get('tada'),
    ` Micro services \x1b[34m${name}\x1b[0m criado com sucesso`
  )
  console.log(
    get('coffee'),
    ` Acesse \x1b[34m${name}\x1b[0m e vamos codar`,
    get('heart')
  )
}
