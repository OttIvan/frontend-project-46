import fs from 'node:fs';
import path from 'node:path';
import { test, expect } from 'vitest';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(import.meta.dirname, '../__fixtures__', filename);

const readExpected = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8').replaceAll('\r\n', '\n').trimEnd();

const expected = readExpected('expected.txt');
const expectedPlain = readExpected('expected-plain.txt');

const filePairs = [
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yaml'],
  ['file1.yml', 'file2.json'],
  ['file1.json', 'file2.yaml'],
];

test.each(filePairs)('compare %s and %s in stylish format', (filename1, filename2) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);

  expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expected);
});

test('use stylish by default', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(expected);
});

test.each(filePairs)('compare %s and %s in plain format', (filename1, filename2) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);

  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain);
});

test('reject an unknown output format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(() => genDiff(filepath1, filepath2, 'unknown')).toThrow(
    'Unsupported output format: unknown',
  );
});
