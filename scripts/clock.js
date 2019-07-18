 const startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  const checkTime = i => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// export default {startTime, checkTime}