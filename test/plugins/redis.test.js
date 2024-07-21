'use strict'

import { test } from 'node:test'
import assert from 'node:assert'
import pg from '../../server/core/pg/client.js'
import rclient from '../../server/core/redis/client.js'
import getRedis from '../../server/core/redis/funcs/getRedis.js'


test('plugin redis', async (t) => {
    await pg.init()

  await t.test('getRedis', async (t) => {
    const data = await getRedis( {} );
    assert.ok(data);
})
t.after(() => {
    rclient.quit();
    pg.end()
  })
  })