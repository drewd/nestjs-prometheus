export function getToken(name: string) {
  return `METRIC_${name.toUpperCase()}`;
}
