#!/usr/bin/env node

const depnames = require('.')
const args = require('minimist')(process.argv.slice(2))

if (!args._.length || !args._[0].length) {
  console.log('Usage:\n')
  console.log('depnames express')
  console.log('depnames express --dev')
  process.exit()
}

async function main () {
  const names = await depnames(args._[0], {dev: args.dev})
  console.log(names.join('\n'))
}

main()
