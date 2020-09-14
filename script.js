$ ("#currentDay").text(moment().format('MMMM Do YYYY'));

var currentHour = (moment().format('H'));
var hourBlock = $('.hour').text();

// Add colour to the hoour blocks to show present, past anf future 
function addColour() {
    if (hourBlock === currentHour) {
        $('.userActivity').addClass('.present')
    } else if (hourBlock < currentHour) {
        $('.userActivity').addClass('.past')
    } else {
        $('.userActivity').addClass('.future')
    }
};

// Local storage for activities 

var userSchedule = $('.userActivity').value
localStorage.setItem('schedule' , 'userActvity');
$('.userActivity').value = localStorage.getItem('schedule' , 'userActivity')
