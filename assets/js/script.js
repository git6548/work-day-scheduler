
var btn8 = $('#btn8');
var btn9 = $('#btn9');
var btn10= $('#btn10');
var btn11 = $('#btn11');
var btn12 = $('#btn12');
var btn13 = $('#btn13');
var btn14 = $('#btn14');
var btn15 = $('#btn15');
var btn16 = $('#btn16');
var btn17 = $('#btn17');
var data8 = $('#data8');
var data9 = $('#data9');
var data10 = $('#data10');
var data11 = $('#data11');
var data12 = $('#data12');
var data13 = $('#data13');
var data14 = $('#data14');
var data15 = $('#data15');
var data16 = $('#data16');
var data17 = $('#data17');

var timeContainer = $('.timeContainer')

//add today's date to top
var today = new Date();
$("#currentDay").html(today);
var currentTime = today.getHours();
//color code for date
timeContainer.each(function (index, element) {
  var timeBlock = element.id.split("-")[0]
  //console.log(timeBlock, currentTime)
  //current
  if (timeBlock == currentTime) {
    $(element).css({ backgroundColor: 'blue' });
  }
  //past
  else if (timeBlock < currentTime) {
    $(element).css({ backgroundColor: 'gray' });
  }
  //future
  else {
    $(element).css({ backgroundColor: 'yellow' });

  }

})

//save to local storage

btn8.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data8", data8.val());
  //console.log(data8.val());
});
btn9.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data9", data9.val());
  //console.log(data9.val());
});
btn10.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data10", data10.val());
  //console.log(data10.val());
});
btn11.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data11", data11.val());
 // console.log(data11.val());
});
btn12.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data12", data12.val());
  //console.log(data12.val());
});
btn13.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data13", data13.val());
 // console.log(data13.val());
});
btn14.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data14", data14.val());
 // console.log(data14.val());
});
btn15.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data15", data15.val());
 // console.log(data15.val());
});
btn16.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data16", data16.val());
  //console.log(data16.val());
});
btn17.on('click', function (event) {
  event.preventDefault();
  localStorage.setItem("data17", data17.val());
  //console.log(data17.val());
});
// #data8 and #btn8

data8.val(localStorage.getItem("data8"));
data9.val(localStorage.getItem("data9"));
data10.val(localStorage.getItem("data10"));
data11.val(localStorage.getItem("data11"));
data12.val(localStorage.getItem("data12"));
data13.val(localStorage.getItem("data13"));
data14.val(localStorage.getItem("data14"));
data15.val(localStorage.getItem("data15"));
data16.val(localStorage.getItem("data16"));
data17.val(localStorage.getItem("data17"));