export interface Part {
  width: number;
  height: number;
}

export interface PlacedPart extends Part {
  x: number;
  y: number;
  sheet: number;
}

export interface Sheet {
  width: number;
  height: number;
}

export function validateParts(parts: Part[], sheet: Sheet): void {
  for (const part of parts) {
    if (part.width <= 0 || part.height <= 0) {
      throw new Error('Part dimensions must be positive');
    }
    if (part.width > sheet.width || part.height > sheet.height) {
      throw new Error('Part exceeds sheet dimensions');
    }
  }
}

export function packGuillotine(parts: Part[], sheet: Sheet): PlacedPart[] {
  validateParts(parts, sheet);
  const sorted = [...parts].sort((a, b) => b.height - a.height);
  const placed: PlacedPart[] = [];
  let x = 0;
  let y = 0;
  let rowHeight = 0;
  let sheetIndex = 0;

  for (const part of sorted) {
    if (x + part.width > sheet.width) {
      x = 0;
      y += rowHeight;
      rowHeight = 0;
    }
    if (y + part.height > sheet.height) {
      sheetIndex++;
      x = 0;
      y = 0;
      rowHeight = 0;
    }
    placed.push({ ...part, x, y, sheet: sheetIndex });
    x += part.width;
    if (part.height > rowHeight) {
      rowHeight = part.height;
    }
  }
  return placed;
}

import { Module } from '../layout/placement';

export function modulesToParts(modules: Module[]): Part[] {
  return modules.map((m) => ({ width: m.width, height: m.height ?? m.width }));
}
