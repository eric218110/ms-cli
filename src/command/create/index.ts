#!/usr/bin/env node

import inquirer from 'inquirer'
import { validateNameMs as validate } from '@utils/validate/validate-name-ms'
import { cloneMS } from './clone'
import { installPackages } from './install'

export const create = async (name = '') => {
  let data = { name }
  if (!data.name) {
    const nameByInputed = await inquirer.prompt([
      {
        type: 'input',
        name: 'value',
        message: 'Qual é o nome do novo MS ?',
        validate
      }
    ])

    const nameByInputednameIsValid = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'value',
        message: `Confirma o nome do MS sendo: ${nameByInputed.value}`
      }
    ])

    if (!!nameByInputednameIsValid.value) {
      data.name = nameByInputed.value
    }
  }

  if (cloneMS(data)) {
    installPackages(data)
  }
}
