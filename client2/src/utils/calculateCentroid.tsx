export const calculateCentroid = (coords: number[][]) => {
  let xSum = 0,
    ySum = 0,
    areaSum = 0;

  for (let i = 0; i < coords.length - 1; i++) {
    const [x1, y1] = coords[i];
    const [x2, y2] = coords[i + 1];

    const crossProduct = x1 * y2 - x2 * y1;

    xSum += (x1 + x2) * crossProduct;
    ySum += (y1 + y2) * crossProduct;
    areaSum += crossProduct;
  }

  const area = areaSum / 2;
  const centroidX = xSum / (6 * area);
  const centroidY = ySum / (6 * area);

  return [centroidX, centroidY];
};
