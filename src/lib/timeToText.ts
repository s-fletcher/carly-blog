/**
 * Converts time in minutes to text
 *
 * ex: 70 = "1 hr 10 mins"
 */
export default function timeToText(time: number): string {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  let hoursUnit = 'hr';
  if (hours > 1) {
    hoursUnit = 'hrs';
  }

  let minutesUnit = 'min';
  if (minutes > 1) {
    minutesUnit = 'mins';
  }

  if (hours === 0) {
    return `${minutes} ${minutesUnit}`;
  }

  if (minutes === 0) {
    return `${hours} ${hoursUnit}`;
  }

  return `${hours} ${hoursUnit} ${minutes} ${minutesUnit}`;
}
