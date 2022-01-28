var btn8= $('#btn8');
var data8=$('#data8');
var timeContainer = $('.timeContainer')

//add today's date to top
var today = new Date();
$("#currentDay").html(today);
var currentTime = today.getHours();
//color code for date
timeContainer.each(function(index, element){
  var timeBlock = element.id.split("-")[0] 
  console.log(timeBlock, currentTime)
  //current
  if (timeBlock == currentTime)  {
    $(element).css({backgroundColor: 'blue'});
   }
   //future
   else if (timeBlock < currentTime)  {
    $(element).css({backgroundColor: 'yellow'});
   }
   //past
   else {
    $(element).css({backgroundColor: 'gray'});

   }

})

 //save to local storage

btn8.on('click', function(event) {
event.preventDefault();
localStorage.setItem("data8", data8.val());
console.log(data8.val());
});
 // #data8 and #btn8

data8.val(localStorage.getItem("data8"));
