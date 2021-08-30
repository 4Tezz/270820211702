const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export function converterUnix(unix) {
  const d = new Date(unix * 1000);
  const readyDate = `${d.getDate() +
    " " +
    months[d.getMonth()]} ${d.getFullYear()}`;
  return readyDate;
}
