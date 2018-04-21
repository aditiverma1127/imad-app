console.log('Loaded!');
//CHANGE THE element of main text div
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';


//MOVE THE IMG
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginleft = '100px';
};