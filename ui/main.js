// COUNTER CODE
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //make req to counter end point
    var request = new XMLHttpRequest();
    //capture response and kept in variable
    //render the var in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};