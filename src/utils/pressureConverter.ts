export default function pressureConverter(pressure: number): string {
  const atm = pressure * 100 / 101325;
  const convertedPressure = atm * 760;

  return convertedPressure.toFixed();
}