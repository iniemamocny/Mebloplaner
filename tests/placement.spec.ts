import { test } from 'node:test';
import assert from 'node:assert';
import { Room, Wall, Opening } from '../src/geometry/room';
import { placeCabinets, SPACING, Module } from '../src/layout/placement';

test('places modules on a simple wall', () => {
  const wall: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 5, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  const room: Room = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    height: 0,
    thickness: 0,
    walls: [wall],
    openings: [],
  };
  const modules: Module[] = [
    { width: 0.5 },
    { width: 1 },
    { width: 0.75 },
  ];
  const placed = placeCabinets(room, 0, modules);
  assert.deepStrictEqual(placed.map((m) => m.width), [1, 0.75, 0.5]);
  const expectedPositions = [
    SPACING,
    1 + 2 * SPACING,
    1 + 0.75 + 3 * SPACING,
  ];
  const rounded = placed.map((m) => Number(m.x.toFixed(10)));
  assert.deepStrictEqual(rounded, expectedPositions);
});

test('skips openings when placing modules', () => {
  const wall: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 5, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  const window: Opening = {
    start: { x: 2, y: 0 },
    end: { x: 3, y: 0 },
    height: 1.2,
    thickness: 0.1,
  };
  const room: Room = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    height: 0,
    thickness: 0,
    walls: [wall],
    openings: [window],
  };
  const modules: Module[] = [{ width: 1 }, { width: 1 }];
  const placed = placeCabinets(room, 0, modules);
  assert.strictEqual(placed[1].x, 3 + SPACING);
});

test('throws error when modules exceed wall length', () => {
  const wall: Wall = {
    start: { x: 0, y: 0 },
    end: { x: 2, y: 0 },
    height: 2.5,
    thickness: 0.2,
  };
  const room: Room = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    height: 0,
    thickness: 0,
    walls: [wall],
    openings: [],
  };
  const modules: Module[] = [{ width: 1 }, { width: 1 }];
  assert.throws(() => placeCabinets(room, 0, modules));
});
