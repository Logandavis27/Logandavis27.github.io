qday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
qmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
function getDateAndTime(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    if(nyear<1000) nyear+=1900;
    document.getElementById("currentdate").innerHTML=""+qday[nday]+", "+ndate+" "+qmonth[nmonth]+", "+nyear+"";
}
getDateAndTime();
