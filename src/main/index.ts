#!/usr/bin/env node

import program from 'commander'
import { version } from '../../package.json'
import { create } from '@command/create'

program.version(version)
program.command('create [name]').description('Criar MS').action(create)
program.parse(process.argv)
