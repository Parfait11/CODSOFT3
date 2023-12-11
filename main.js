function updateClock() {
    let now = new Date(),
        dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

    Number.prototype.pad = function (digits) {
        let n = this.toString();
        while (n.length < digits) {
            n = '0' + n;
        }
        return n;
    };

    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds"];

    let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2)];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval(updateClock, 1);
}
