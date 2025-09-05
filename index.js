 let date = new Date();

 let month = date.getMonth();
 let day = date.getDate();


 // dafault background-color
 // function setHolidayTheme() {
 //   let color1 = "lightblue";
 // let color2 = "lightblue";


 if (month == 11 && day === 25) {
     color1 = "red";
     color2 = "green";

     document.getElementById("message").innerHTML = "ho ho ho";
     document.getElementById("holiday").innerText = "Merry Christmas";
     console.log("merry christmas");
 } else if (month === 1 && day === 14) {
     color1 = "red";
     color2 = "white ";

     document.getElementById("message").innerHTML = "love is in the air";
     document.getElementById("holiday").innerText = "Happy Valentines ";
     console.log("happy  valentines");
 } else if (month === 2 && day === 8) {
     color1 = "#808080";
     color2 = "lightblue";

     document.getElementById("message").innerHTML = "Happy mother's Day";
     document.getElementById("holiday").innerText = " world greatest tresure of all";
     console.log("womens day");
 } else if (month === 3 && day === 1) {
     color1 = "#008686";
     color2 = "navyblue";

     document.getElementById("message").innerHTML = "Happy children's Day";
     document.getElementById("holiday").innerText = " world's little star";
     console.log("childrens day");
 } else if (month === 0 && day === 1) {
     console.log("new year eva");
 } else if (month === 4 && day === 1) {
     console.log("worker day");
 } else if (month === 5 && day === 12) {
     console.log("democracy day");
 } else if (month === 5 && day === 15) {
     console.log("father day");
 } else if (month === 9 && day === 1) {
     console.log("national day");
 } else if (month === 11 && day === 24) {
     console.log("christmass eva");
 } else if (month === 11 && day === 26) {
     console.log("boxing day");
 } else if (month === 11 && day === 31) {
     console.log("New year eva");
 } else {

     document.getElementById("message").innerHTML = "there isn't any holiday today";
     document.getElementById("holiday").innerText = "no holidays";
 }
 //Set dropdowns and gradient
 document.getElementById('colorDropdown1').value = color1;
 document.getElementById('colorDropdown2').value = color2;
 document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
 //}

 // setHolidayTheme();



 function setGradient() {
     let color1 = document.getElementById('colorDropdown1').value;
     let color2 = document.getElementById('colorDropdown2').value;
     document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
 }
 document.getElementById('colorDropdown1').addEventListener('change', setGradient);
 document.getElementById('colorDropdown2').addEventListener('change', setGradient);