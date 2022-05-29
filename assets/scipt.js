//javascript will go here
//jumbotron display for current time and date
var currenttime = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(currenttime);

//event listener button for save
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");

    //store saved data in local storage
    localStorage.setItem(time, text);
  });
});
// function to get the current time
function time() {
  var timenow = moment().hour();
}

// function to loop through timeblocks
$(".time-block").each(function () {
  var blocktime = parseInt($(this).attr("id").split("hour")[1]);

  // function for added content to time blocks
  if (blocktime < timenow) {
    $(this).removeclass("future");
    $(this).removeclass("present");
    $(this).addclass("past");
  }
});

// fetch data from local storage portion here
