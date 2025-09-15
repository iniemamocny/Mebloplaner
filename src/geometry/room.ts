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

export function checkCollision(a: BaseElement, b: BaseElement): boolean {
  const rect = (e: BaseElement): Point[] => {
    const dx = e.end.x - e.start.x;
    const dy = e.end.y - e.start.y;
    const len = Math.hypot(dx, dy);
    const half = e.thickness / 2;
    if (len === 0) {
      return [
        { x: e.start.x - half, y: e.start.y - half },
        { x: e.start.x + half, y: e.start.y - half },
        { x: e.start.x + half, y: e.start.y + half },
        { x: e.start.x - half, y: e.start.y + half },
      ];
    }
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;
    return [
      { x: e.start.x + px * half, y: e.start.y + py * half },
      { x: e.start.x - px * half, y: e.start.y - py * half },
      { x: e.end.x - px * half, y: e.end.y - py * half },
      { x: e.end.x + px * half, y: e.end.y + py * half },
    ];
  };

  const project = (points: Point[], axis: Point): { min: number; max: number } => {
    const dots = points.map((p) => p.x * axis.x + p.y * axis.y);
    return { min: Math.min(...dots), max: Math.max(...dots) };
  };

  const A = rect(a);
  const B = rect(b);

  const axes: Point[] = [
    { x: A[1].x - A[0].x, y: A[1].y - A[0].y },
    { x: A[3].x - A[0].x, y: A[3].y - A[0].y },
    { x: B[1].x - B[0].x, y: B[1].y - B[0].y },
    { x: B[3].x - B[0].x, y: B[3].y - B[0].y },
  ];

  for (const axis of axes) {
    const len = Math.hypot(axis.x, axis.y);
    const unit = { x: axis.x / len, y: axis.y / len };
    const projA = project(A, unit);
    const projB = project(B, unit);
    if (projA.max < projB.min || projB.max < projA.min) {
      return false;
    }
  }
  return true;
}

export function convertToLocal(point: Point, origin: Point): Point {
  return { x: point.x - origin.x, y: point.y - origin.y };
}
