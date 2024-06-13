export default function timeConverter(time: number): string {
  const date = new Date(time * 1000);
  const convertedTime = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;

  return convertedTime;
}