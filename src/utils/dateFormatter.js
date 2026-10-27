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
  "10": "October",
  "11": "November",
  "12": "December"
};

export function dateFormatter(date) {
    const dateArr = date.split("-");
    const day = dateArr[2][0].includes("0") ? dateArr[2][1] : dateArr[2];
    const monthKey = Object.keys(months).find(month => month === dateArr[1]);
    const year = dateArr[0];

    return `${day} ${months[monthKey]}, ${year}`
}