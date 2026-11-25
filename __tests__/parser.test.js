import { test, expect } from 'vitest';
import parse from '../src/parser.js';

test('unsupported file format', () => {
  expect(() => parse('{}', '.xml')).toThrow('Unsupported file format: .xml');
});
