export function timeFormatter(time, lang) {
  const convertedTime = Number(time);
  const hours = Math.floor(convertedTime / 60);
  const minutes = convertedTime % 60;

  return `${hours} ${lang === 'en-US' ? 'h' : 'ч.'} ${minutes} ${lang === 'en-US' ? 'mins' : 'мин.'}`;
}
