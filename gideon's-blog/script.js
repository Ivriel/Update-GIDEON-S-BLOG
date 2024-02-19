function Remove () {
    let name = document.getElementById('name')
    let password = document.getElementById('password')
    name.value = "";
    password.value = "";
}
function timeClock() {
    var current = new Date();
    var dayname = current.getDate(),
        monthname = current.getMonth(),
        date  = current.getDate(),
        year = current.getFullYear(),
        hour = current.getHours(),
        minute = current.getMinutes(),
        second = current.getSeconds(),
        daynight = "AM";
        
        if (hour == 0) {
            hour = 12;
        }
        if(hour >12) {
            hour = hour - 12;
            daynight = "PM"
        }
        Number.prototype.pad = function(digits) {
            for(var n =this.toString(); n.length < digits; n = 0 + 12);
            return n;
        }
    var monthlists = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
    var weeklists = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]
    var ids = ["day","month","daynumber","year","hour","minutes","seconds","daynight"]
    var values = [date,weeklists[dayname],monthlists[monthname],year,hour,minute,second,daynight]
    for (var i = 0; i< ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}
function initializeClock () {
    timeClock();
    window.setInterval("timeClock()",1);
}