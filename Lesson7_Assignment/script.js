/*  Program Name: Recipe Display Application
    Author: Isaac Bass
    Date: 3/29/17
    Filename: script.js */

//  Displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}   //  end of display

//  Attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);