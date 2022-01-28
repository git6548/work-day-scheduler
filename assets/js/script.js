var btn8= $('#btn8');
var data8=$('#data8');
//add today's date to top
var today = new Date();
$("#currentDay").html(today);


// create if then statement for times and colors
console.log(today.getHours());

//if attempt
 if (today.getHours() > 8)  {
 $("#8container").css({backgroundColor: 'red'});
}
if (today.getHours() > 9)  {
  $("#9container").css({backgroundColor: 'red'});
 } 


 //save to local storage

btn8.on('click', function(event) {
event.preventDefault();
localStorage.content = data8.html();
console.log(localStorage);
});
 // #data8 and #btn8