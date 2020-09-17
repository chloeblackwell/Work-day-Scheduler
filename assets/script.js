$(document).ready(function () {

    // Displays the current date on the page 
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // Click function for save button 
    $(".saveBtn").on("click", function () {
        
        var userInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Saves the value to local storage 
        localStorage.setItem(time, userInput);
    });

    function addColour() {
        
        var currentHour = moment().format('hA');
        
        // Loops over the time blocks 
        $(".time-block").each(function () {
            var hourlyBlock = $(".hour").text();
 
            if (hourlyBlock < currentHour) {
                $(this).addClass("past");
            } 
            else if (hourlyBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
       });
    };

    addColour();

    // Data saved from local storage 
    $("#input1 .description").val(localStorage.getItem("hour-9"));
    $("#input2 .description").val(localStorage.getItem("hour-10"));
    $("#input3 .description").val(localStorage.getItem("hour-11"));
    $("#input4 .description").val(localStorage.getItem("hour-12"));
    $("#input5 .description").val(localStorage.getItem("hour-13"));
    $("#input6 .description").val(localStorage.getItem("hour-14"));
    $("#input7 .description").val(localStorage.getItem("hour-15"));
    $("#input8 .description").val(localStorage.getItem("hour-16"));
    $("#input9 .description").val(localStorage.getItem("hour-17"));

});








