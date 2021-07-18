let hero = $('.jumbotron');

    var currentDate = moment().format('LLLL');
    //$('clock').html(currentDate);
    hero.append(currentDate);

$(document).ready(function(){
    displayTime();
});
