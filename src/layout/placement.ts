import { Room, Wall, Point, wallLength, checkCollision, convertToLocal } from '../geometry/room';

export interface Module {
  width: number;
  height?: number;
}

export interface PlacedModule extends Module {
  x: number;
  y: number;
}

export const SPACING = 0.05; // default gap in meters

function projectToWall(point: Point, wall: Wall): number {
  const local = convertToLocal(point, wall.start);
  if (wall.start.x === wall.end.x) {
    return local.y;
  }
  if (wall.start.y === wall.end.y) {
    return local.x;
  }
  const dx = wall.end.x - wall.start.x;
  const dy = wall.end.y - wall.start.y;
  const len = Math.hypot(dx, dy);
  return (local.x * dx + local.y * dy) / len;
}

export function placeCabinets(room: Room, wallId: number, modules: Module[]): PlacedModule[] {
  const wall = room.walls[wallId];
  if (!wall) throw new Error('Wall not found');

  const totalWidth = modules.reduce((sum, m) => sum + m.width, 0);
  const totalSpacing = SPACING * (modules.length + 1);
  const length = wallLength(wall);

  if (totalWidth + totalSpacing > length) {
    throw new Error('Modules exceed wall length');
  }

  const openings = room.openings
    .filter((o) => checkCollision(o, wall))
    .map((o) => {
      const start = projectToWall(o.start, wall);
      const end = projectToWall(o.end, wall);
      return [Math.min(start, end), Math.max(start, end)];
    });

  let cursor = SPACING;
  const placed: PlacedModule[] = [];
  for (const mod of modules) {
    let start = cursor;
    let end = start + mod.width;
    let adjusted = true;
    while (adjusted) {
      adjusted = false;
      for (const [os, oe] of openings) {
        if (start < oe && end > os) {
          start = oe + SPACING;
          end = start + mod.width;
          adjusted = true;
          break;
        }
      }
    }
    if (end > length - SPACING) {
      throw new Error('Not enough space for modules');
    }
    placed.push({ ...mod, x: start, y: 0 });
    cursor = end + SPACING;
  }

  return placed;
}
