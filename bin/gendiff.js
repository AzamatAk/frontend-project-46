#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('-V, --version        output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
program.parse();