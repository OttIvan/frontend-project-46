import fs from 'node:fs';
import path from 'node:path';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';
import parse from './parsers.js';

const readConfig = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const format = path.extname(absolutePath);
  return parse(fs.readFileSync(absolutePath, 'utf-8'), format);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const before = readConfig(filepath1);
  const after = readConfig(filepath2);
  const diff = buildDiff(before, after);

  return formatDiff(diff, format);
};

export default genDiff;
