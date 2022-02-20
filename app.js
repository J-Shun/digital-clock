function showTime() {
    // catch time right now
    const now = new Date();
    // let date = (now.getDate() < 10) ? '0' + String(now.getDate()) : now.getDate();
    let hours = (now.getHours() < 10) ? '0' + String(now.getHours()) : now.getHours();
    let minutes = (now.getMinutes() < 10) ? '0' + String(now.getMinutes()) : now.getMinutes();
    let seconds = (now.getSeconds() < 10) ? '0' + String(now.getSeconds()) : now.getSeconds();
    
    // catch HTML tag
    // let nowDate = document.querySelector('.date');
    let nowHour = document.querySelector('.hour');
    let nowMinute = document.querySelector('.minute');
    let nowSecond = document.querySelector('.second');

    // change time
    // nowDate.innerHTML = date;
    nowHour.innerHTML = hours;
    nowMinute.innerHTML = minutes;
    nowSecond.innerHTML = seconds;
}

setInterval(showTime, 1000);

