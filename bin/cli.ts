#!/usr/bin/env node
/**
 * https://github.com/wechaty/token
 *
 * Author: Huan <zixia@zixia.net>
 * License: Apache-2.0
 *
 * CLI Apps in TypeScript with `cmd-ts` (Part 1)
 *  Using `cmd-ts` to easily build a type-safe TypeScript CLI app
 *
 *  https://gal.hagever.com/posts/type-safe-cli-apps-in-typescript-with-cmd-ts-part-1/
 */
/* eslint-disable sort-keys */
import {
  binary,
  run,
  subcommands,
}                     from 'cmd-ts'

import { VERSION } from '../src/version.js'

import { cmds } from '../src/cli/mod.js'

const wechatyToken = subcommands({
  name: 'wechaty-token',
  description: 'Wechaty utility for discovering and generating tokens',
  version: VERSION,
  cmds,
})

run(
  binary(wechatyToken),
  process.argv,
).catch(console.error)
