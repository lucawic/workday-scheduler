# Work Day Scheduler

UA Coding BootCamp\
Module Challenge #5: Work Day Scheduler (with starter code)

## Objectives

The purpose of implentating the code in this Module #5 challenge was to finish creating a workday scheduler that would allow a busy person to organize their day, hour by hour, so that they can adjust for their daily tasks, and then allocate the appropriate time to each tasks. Specifically, the user wanted to be able to use a daily planner to create a personal schedule. The app will allow the the user[I] to complete the functions as follows...\
WHEN I open the planner\
THEN the current day is displayed at the top of the calendar\
WHEN I scroll down\
THEN I am presented with time blocks for standard business hours\
WHEN I view the time blocks for that day\
THEN each time block is color-coded to indicate whether it is in the past, present, or future\
WHEN I click into a time block\
THEN I can enter an event\
WHEN I click the save button for that time block\
THEN the text for that event is saved in local storage\
WHEN I refresh the page\
THEN the saved events persist\

### Code Examples
#### ex1\
This code displays the current time and date and it is done so in the header of the html doc, where the hero element lies.\ 
\
    var currentDate = moment().format('LLLL');\
    hero.append(currentDate);\
\
the moment format is a CDN called momentjs that is used for displaying dates and times. was created in 2011 and is currently getting phased out of use by modern tech./
#### ex2\
$(".time-block").each(function () {\
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);\
    \
This is a jquery function that loops through the timeblocks (hours of the day) in the scheduler and is important for other functionality like highlighting the past present and future "time-blocks" in different colors.

    
  

