
import { test } from 'node:test'
import assert from 'node:assert'
import rclient from '../../server/core/redis/client.js'

import isFileExists from '../../server/core/file/funcs/isFileExists.js'
import uploadFile from '../../server/core/file/funcs/uploadFile.js'
import upload from '../../server/core/file/funcs/uploadFileDisk.js'
import downloadFile from '../../server/core/file/funcs/downloadFile.js'

// const { describe, it, before, after } = require('node:test');
// const assert = require('assert/strict');
// const app = require('../../../service/fastifyApp');
// const db = require('../../init.db');
// const funcsWrap = require('../../../service/funcs');
// const funcs = funcsWrap({ db });
// const pg = funcs.getPG();
// const data = {};
// const testFile = 'test.txt';

// before(async () => {

//   const testFilePath = path.join(db.folder, 'files', testFile);
//   await mkdir(path.dirname(testFilePath), { recursive: true });

//   const testFiles = await readdir(path.dirname(testFilePath));
//   const testFileFound = testFiles.find((el) => el === testFile);

//   // download file
//   if (!testFileFound) {
//     const cdnHost = 'https://cdn.softpro.ua/data/test/node/convert/';
//     const options = {
//       method: 'GET',
//       rejectUnauthorized: false,
//       responseType: 'buffer',
//     };
//     const { body: fileBuffer } = await funcs.request({ ...options, url: `${cdnHost}/${testFile}` });
//     await writeFile(testFilePath, fileBuffer);
//   }
// });

test('plugin file', async (t) => {
await t.test('isFileExists', async (t) => {
    const data = await isFileExists('test.txt');
    assert.ok(data);
  })
  
await t.test('uploadFile', async (t) => {
    const data = await uploadFile('test.txt');
    assert.ok(data);
  })

await t.test('uploadFileDisk', async (t) => {
    const data = await upload({folder: 'files'});
    assert.ok(data);
  })

await t.test('downloadFile', async (t) => {
    const data = await downloadFile('test.txt');
    assert.ok(data);
  })

await t.test('getPath', async (t) => {
    const data = await downloadFile('test.txt');
    assert.ok(data);
  })
  t.after(() => {
    rclient.quit();
  })
})