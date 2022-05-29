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
  else (blocktime === timenow) {
    $(this).removeclass("past");
    $(this).removeclass("future");
    $(this).addclass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
})

// fetch data from local storage portion here
