export default function tempConverter(kelvinTemp: number): string {
  const temp = kelvinTemp - 273;

  return temp.toFixed();
}