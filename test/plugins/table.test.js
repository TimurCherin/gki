'use strict'

import { test } from 'node:test'
import assert from 'node:assert'
import pg from '../../server/core/pg/client.js'
import rclient from '../../server/core/redis/client.js'
import getTable from '../../server/core/table/controllers/utils/getTable.js'
import formatValue from '../../server/core/table/funcs/getFilterSQL/util/formatValue.js'
import getCustomQuery from '../../server/core/table/funcs/getFilterSQL/util/getCustomQuery.js'
import getFilterQuery from '../../server/core/table/funcs/getFilterSQL/util/getFilterQuery.js'
import getOptimizedQuery from '../../server/core/table/funcs/getFilterSQL/util/getOptimizedQuery.js'
import getTableSql from '../../server/core/table/funcs/getFilterSQL/util/getTableSql.js'

test('plugin table', async (t) => {
    await pg.init()

  await t.test('getTableSql', async (t) => {
    const data = await getTableSql( {table: 'admin.site'} );
    assert.ok(data);
})
  await t.test('getTable', async (t) => {
    const data = await getTable('gis.dataset.table');
    assert.ok(data);
})
t.after(() => {
  rclient.quit();
  pg.end()
})
})
