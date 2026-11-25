import fs from 'node:fs';
import path from 'node:path';
import { test, expect } from 'vitest';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(import.meta.dirname, '../__fixtures__', filename);

test('compare flat JSON files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').trimEnd();

  expect(genDiff(filepath1, filepath2)).toBe(expected);
});
