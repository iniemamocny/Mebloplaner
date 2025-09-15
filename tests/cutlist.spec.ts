import { test } from 'node:test';
import assert from 'node:assert';
import { modulesToParts, packGuillotine, validateParts, Sheet } from '../src/cutlist/format';
import { Module } from '../src/layout/placement';

test('packs parts within a single sheet', () => {
  const modules: Module[] = [
    { width: 60, height: 40 },
    { width: 60, height: 60 },
    { width: 40, height: 40 },
  ];
  const parts = modulesToParts(modules);
  const sheet: Sheet = { width: 100, height: 100 };
  validateParts(parts, sheet);
  const placed = packGuillotine(parts, sheet);
  assert.strictEqual(Math.max(...placed.map((p) => p.sheet)) + 1, 1);
  const coords = placed.map((p) => ({ sheet: p.sheet, x: p.x, y: p.y, width: p.width, height: p.height }));
  assert.deepStrictEqual(coords, [
    { sheet: 0, x: 0, y: 0, width: 60, height: 60 },
    { sheet: 0, x: 0, y: 60, width: 60, height: 40 },
    { sheet: 0, x: 60, y: 60, width: 40, height: 40 },
  ]);
});

test('uses multiple sheets when necessary', () => {
  const modules: Module[] = [
    { width: 80, height: 60 },
    { width: 80, height: 60 },
    { width: 20, height: 30 },
  ];
  const parts = modulesToParts(modules);
  const sheet: Sheet = { width: 100, height: 100 };
  validateParts(parts, sheet);
  const placed = packGuillotine(parts, sheet);
  assert.strictEqual(Math.max(...placed.map((p) => p.sheet)) + 1, 2);
  const coords = placed.map((p) => ({ sheet: p.sheet, x: p.x, y: p.y }));
  assert.deepStrictEqual(coords, [
    { sheet: 0, x: 0, y: 0 },
    { sheet: 1, x: 0, y: 0 },
    { sheet: 1, x: 80, y: 0 },
  ]);
});

test('throws error for non-positive part dimensions', () => {
  const sheet: Sheet = { width: 100, height: 100 };
  assert.throws(
    () => validateParts([{ width: 0, height: 10 }], sheet),
    /Part dimensions must be positive/
  );
  assert.throws(
    () => validateParts([{ width: 10, height: -5 }], sheet),
    /Part dimensions must be positive/
  );
});
