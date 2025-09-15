import { test } from 'node:test';
import assert from 'node:assert';
import { Wall, checkCollision, wallLength } from '../src/geometry/room';

test('calculates wall length', () => {
  const wall: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 3, y: 4 },
    height: 2.5,
    thickness: 0.2,
  };
  assert.strictEqual(wallLength(wall), 5);
});

test('detects collision between walls', () => {
  const wall1: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  const wall2: Wall = {
    start: { x: 5, y: -5 },
    end: { x: 5, y: 5 },
    height: 2.5,
    thickness: 0.2,
  };
  assert.ok(checkCollision(wall1, wall2));
});

test('detects lack of collision between walls', () => {
  const wall1: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  const wall2: Wall = {
    start: { x: 2, y: 0 },
    end: { x: 3, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  assert.ok(!checkCollision(wall1, wall2));
});
