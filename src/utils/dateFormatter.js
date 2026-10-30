const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const monthsRU = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  10: "октября",
  11: "ноября",
  12: "декабря",
};

export function dateFormatter(date, lang) {
  if (!date) return "No information";

  const dateArr = date.split("-");
  const day = dateArr[2][0].includes("0") ? dateArr[2][1] : dateArr[2];
  const dict = lang === "en-US" ? months : monthsRU;
  const month = dict[dateArr[1]];
  const year = dateArr[0];

  return lang === "en-US" ? `${month} ${day}, ${year}` : `${day} ${month}, ${year}`;
}
