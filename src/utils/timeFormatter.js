export function timeFormatter(time) {
    const convertedTime = Number(time);
    const hours = Math.floor(convertedTime / 60);
    const minutes = convertedTime % 60;

    return `${hours} h ${minutes} mins`;
}