import fs from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const format1 = path.extname(absolutePath1);
  const format2 = path.extname(absolutePath2);

  const data1 = parse(fs.readFileSync(absolutePath1, 'utf-8'), format1);
  const data2 = parse(fs.readFileSync(absolutePath2, 'utf-8'), format2);

  const keys = _.sortBy([...Object.keys(data1), ...Object.keys(data2)]);

  const lines = [...new Set(keys)].flatMap((key) => {
    if (!Object.hasOwn(data2, key)) {
      return [`  - ${key}: ${data1[key]}`];
    }

    if (!Object.hasOwn(data1, key)) {
      return [`  + ${key}: ${data2[key]}`];
    }

    if (data1[key] === data2[key]) {
      return [`    ${key}: ${data1[key]}`];
    }

    return [`  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`];
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
