console.log('Loaded!');
//CHANGE THE element of main text div
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';


//MOVE THE IMG
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft =marginLeft + 10;
    //convert to string concate 10px
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    //every 100milisec apply moveright function 
    var interval = setInterval(moveRight,100);
    //move to right
    img.style.marginleft = '100px';
};