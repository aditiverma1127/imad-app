console.log('Loaded!');
//CHANGE THE element of main text div
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';


//MOVE THE IMG
var img = document.getElementById('madi');
img.onclick = function () {
    //move to right
    img.style.marginleft = '100px';
};