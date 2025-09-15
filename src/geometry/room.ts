export interface Point {
  x: number;
  y: number;
}

interface BaseElement {
  start: Point;
  end: Point;
  height: number;
  thickness: number;
}

export type Wall = BaseElement;

export type Opening = BaseElement;

export interface Room extends BaseElement {
  walls: Wall[];
  openings: Opening[];
}

export function wallLength(wall: Wall): number {
  const dx = wall.end.x - wall.start.x;
  const dy = wall.end.y - wall.start.y;
  return Math.hypot(dx, dy);
}

function orientation(p: Point, q: Point, r: Point): number {
  const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (val === 0) return 0;
  return val > 0 ? 1 : 2;
}

function onSegment(p: Point, q: Point, r: Point): boolean {
  return (
    q.x <= Math.max(p.x, r.x) &&
    q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) &&
    q.y >= Math.min(p.y, r.y)
  );
}

export function checkCollision(a: BaseElement, b: BaseElement): boolean {
  const o1 = orientation(a.start, a.end, b.start);
  const o2 = orientation(a.start, a.end, b.end);
  const o3 = orientation(b.start, b.end, a.start);
  const o4 = orientation(b.start, b.end, a.end);

  if (o1 !== o2 && o3 !== o4) return true;

  if (o1 === 0 && onSegment(a.start, b.start, a.end)) return true;
  if (o2 === 0 && onSegment(a.start, b.end, a.end)) return true;
  if (o3 === 0 && onSegment(b.start, a.start, b.end)) return true;
  if (o4 === 0 && onSegment(b.start, a.end, b.end)) return true;

  return false;
}

export function convertToLocal(point: Point, origin: Point): Point {
  return { x: point.x - origin.x, y: point.y - origin.y };
}
