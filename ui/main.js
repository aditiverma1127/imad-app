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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var name = ['name1','name2','name3','name4'];
//    convert into html string
    var list ='';
    for( var i =0; i< names.length;i++){
        list += '<li>' + name[i] + '</li>';
        
    }
    //insert html in ul
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};