// COUNTER CODE
var button = document.getElementById('counter');

button.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    
    
    
    //capture response and kept in variable
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.Done) {
            //take some action
            if(request.status ===200){
            var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
            }
    }
    
    //not done yet
};
//make req
request.open('GET','http://aditivermavccse15.imad.hasura-app.io/counter',true);
request.send(null);



};