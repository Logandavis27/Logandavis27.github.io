qday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
qmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
function getDateAndTime(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    if(nyear<1000) nyear+=1900;
    document.getElementById("currentdate").innerHTML=""+qday[nday]+", "+ndate+" "+qmonth[nmonth]+", "+nyear+"";
}
getDateAndTime();

function getDay1(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()];
    document.getElementById("day1").innerHTML = n;
}
getDay1();

function getDay2(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+1];
    document.getElementById("day2").innerHTML = n;
}
getDay2();

function getDay3(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+2];
    document.getElementById("day3").innerHTML = n;
}
getDay3();

function getDay4(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+3];
    document.getElementById("day4").innerHTML = n;
}
getDay4();


function getDay5(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+4];
    document.getElementById("day5").innerHTML = n;
}
getDay5();


function getDay6(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+5];
    document.getElementById("day6").innerHTML = n;
}
getDay6();


function getDay7(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+6];
    document.getElementById("day7").innerHTML = n;
}
getDay7();

function getDay8(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()];
    document.getElementById("day8").innerHTML = n;
}
getDay8();

function getDay9(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+1];
    document.getElementById("day9").innerHTML = n;
}
getDay9();

function getDay10(){
    var d = new Date();
    var weekday = new Array(14);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] =  "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    var n = weekday[d.getDay()+2];
    document.getElementById("day10").innerHTML = n;
}
getDay10();

function toggleNavMenu() {
    document.getElementById("navmenu").classList.toggle("hide");
}
