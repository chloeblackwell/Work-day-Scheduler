// Displays current day on the screen
$ ("#currentDay").text(moment().format('MMMM Do YYYY'));

// Works out the current hour 
var currentHour = (moment().format('h'));
var hourBlock = $('.hour').text();


var nine = document.querySelector("#input1");
var ten = document.querySelector("#input2");
var eleven = document.querySelector("#input3");
var twelve = document.querySelector("#input4");
var one = document.querySelector("#input5");
var two = document.querySelector("#input6");
var three = document.querySelector("#input7");
var four = document.querySelector("#input8");
var five = document.querySelector("#input9");

// Click function for the hour block 

$('.saveBtn').on('click', function () {
    
});



// Add colour to the hour blocks to show present, past anf future 

function addColour () {

    if (hourBlock < currentHour) {
        $('.description').addClass("past");
    } else if (hourBlock === currentHour) {
        $('.description').removeClass("past");
        $('.description').addClass("present");
        
    } else {
        $('.description').removeClass("past");
        $('.description').removeClass("present");
        $('.description').addClass("future");
    }
}

addColour();


// 



