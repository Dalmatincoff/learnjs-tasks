//1
let date = new Date(2012, 1, 20, 3, 12);
console.log( date );

//2
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

//3
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

//4
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

//5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

//6
function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let d = now - today;
    return Math.round(d / 1000);
}
//7
function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let d = tomorrow - now;
    return Math.round(diff / 1000);
}

//8
function formatDate(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    if (diff < 1000) {
        return ('right now');
    } else if (diff < 60 * 1000) {
        return (`${Math.round(diff / 1000)} secs ago`);
    } else if (diff < 60 * 60 * 1000) {
        return (`${Math.round(diff / 60000)} mins ago`);
    } else {
        let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
        let month = date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth();
        let year = date.getFullYear() > 2010 ? date.getFullYear() - 2000 : "0" + (date.getFullYear() - 2000);
        let hours = date.getHours() > 10 ? date.getHours() : "0" + date.getHours();
        let mins = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();

        return `${day}.${month}.${year} ${hours}:${mins}`;
    }
}