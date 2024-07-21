'use strict'

import { test } from 'node:test'
import assert from 'node:assert'


import getMeta from '../../server/core/pg/funcs/getMeta.js'
import autoIndex from '../../server/core/pg/funcs/autoIndex.js'
import getPG from '../../server/core/pg/funcs/getPG.js'
import pg from '../../server/core/pg/client.js'
import rclient from '../../server/core/redis/client.js'

test('plugin pg', async (t) => {
  await pg.init()

  await t.test('getMeta', async (t) => {
    const { columns } = await getMeta({ table: 'gis.dataset' })
    //console.log(columns)
    assert.ok(columns);
  });

  await t.test('getPG', async (t) => {
    const data = await getPG({});
    assert.ok(data);
  });

  // await t.test('autoIndex', async (t) => {
  //   const result = await autoIndex({ table: 'gis.dataset', columns: ['service_type'] })
  //   assert.ok(result);
  // })
  t.after(() => {
    rclient.quit();
    pg.end()
  })
})
