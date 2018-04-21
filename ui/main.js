// COUNTER CODE
var button = document.getElementById('counter');
button.onclick = function() {
    //make req to counter end point
    //capture response and kept in variable
    //render the var in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};