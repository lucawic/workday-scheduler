let hero = $('.jumbotron');

// displays current date and time at top of webpage
    var currentDate = moment().format('LLLL');
    hero.append(currentDate);

//create functioning list for by hour by hour descriptions
$(document).ready(function (){
    //save button on the end of timeblock
    $(".saveBtn").on("click", function () {
        //variables including content of textarea element in HTML
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save text entering time-block to the local storage
        localStorage.setItem(time, text);
})
    
function timeTracker() {
    //get the current hour
    var timeNow = moment().hour();


//for loop to loop through the hours of the work day
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);


    //this will check the time and add the corresponding background color indicators
    if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (blockTime ===timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    })
}
    
  // Get item from local storage if any
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));

  timeTracker();
})