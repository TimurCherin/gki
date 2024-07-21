'use strict'

import { test } from 'node:test'
import assert from 'node:assert'


import getOpt from '../../server/core/crud/funcs/getOpt.js'
import setOpt from '../../server/core/crud/funcs/setOpt.js'
import rclient from '../../server/core/redis/client.js'

test('plugin crud', async (t) => {

  await t.test('setOpt', async (t) => {
    const data = await setOpt({ "data": 1 });
    assert.ok(data);
  })

  await t.test('getOpt', async (t) => {
    const opt = await setOpt({ data: 1 });
    const data = await getOpt(opt);
    assert.equal(data.data, 1);
  });

  // await t.test('dataInsert', async (t) => {
  //   const opt = await setOpt({ data: 1 });
  //   const data = await getOpt(opt);
  //   assert.equal(data.data, 1);
  // });

  // await t.test('dataUpdate', async (t) => {
  //   const opt = await setOpt({ data: 1 });
  //   const data = await getOpt(opt);
  //   assert.equal(data.data, 1);
  // });
  t.after(() => rclient.quit())
})
