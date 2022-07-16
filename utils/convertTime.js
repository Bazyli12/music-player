export default function convertTime(seconds) {
    let sec = Math.floor(seconds);
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);

    hour = Math.floor(hour % 60);
    min = Math.floor(min % 60);
    sec = Math.floor(sec % 60);

    sec = sec >= 10 ? sec : "0" + sec;

    if (hour >= 1) {
        min = min >= 10 ? min : "0" + min;
        return hour + ":" + min + ":" + sec;
    }
    return min + ":" + sec;
}
