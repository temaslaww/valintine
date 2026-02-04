document.addEventListener('DOMContentLoaded', function(){


const ButtYES = document.getElementById('buttYES');
const ButtNO = document.getElementById('buttNO');
const Span = document.getElementById('Span');
const butt = document.getElementById('butt');
const minon = document.getElementById('minon');

let currentWidth = 90;
let currentHeight = 45;
let currentWidthNO = 90;
let currentHeightNO = 45;

ButtNO.addEventListener('click',function(){
    currentWidth += 30;
    currentHeight += 20;
    currentWidthNO -= 10;
    currentHeightNO -= 2;

    ButtYES.style.width = currentWidth + 'px';
    ButtYES.style.height = currentHeight + 'px';
    ButtNO.style.width = currentWidthNO + 'px';
    ButtNO.style.height = currentHeightNO + 'px';

});
ButtYES.addEventListener('click',function(){
    ButtYES.style.display = 'none';
    ButtNO.style.display = 'none';
    Span.style.display = 'none';
    minon.style.display = 'none';

    butt.style.display = 'flex';
    butt.style.flexDirection = 'column';

    const newText = document.createElement('p');
    newText.innerHTML= 'УРААА!<br>Я знал что ты примишь меня!';
    newText.style.fontSize = '20px';
    newText.style.color = 'black';
    newText.style.fontWeight = 'bold';

    const img = document.createElement('img');
    img.src = 'love.gif';
    img.style.width = '100%'
    img.style.height = 'auto'
    butt.appendChild(img);
    butt.appendChild(newText);


});
});