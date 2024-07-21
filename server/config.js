import { readFile } from 'fs/promises';
import fs from 'fs';
const config = fs.existsSync('config.json') ? JSON.parse(await readFile('config.json')) : {};

export default config;