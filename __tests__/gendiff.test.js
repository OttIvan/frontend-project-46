import fs from 'node:fs';
import path from 'node:path';
import { test, expect } from 'vitest';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(import.meta.dirname, '../__fixtures__', filename);

const expected = fs
  .readFileSync(getFixturePath('expected.txt'), 'utf-8')
  .replaceAll('\r\n', '\n')
  .trimEnd();

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yaml'],
  ['file1.yml', 'file2.json'],
  ['file1.json', 'file2.yaml'],
])('compare %s and %s', (filename1, filename2) => {
  expect(genDiff(getFixturePath(filename1), getFixturePath(filename2))).toBe(expected);
});
