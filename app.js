let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let currDate = new Date();

hrs.innerHTML = currDate.getHours();
min.innerHTML = currDate.getMinutes();
sec.innerHTML = currDate.getSeconds();