function trackMouse(event){
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('ppooff').style = `transform: rotateX(0deg) rotateY(0deg) translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%)); backdrop-filter: blur(5px);position: absolute;top: 0;left:0;margin:0;padding:0;width:150px;height:150px;background-color: rgba(0, 0, 0, 0);z-index:100000000000000000000000000000000000000000000000000000000000000000000000;`;
}

document.querySelector('body').onmousemove = function(){trackMouse(event)};
document.querySelector('#ppooff').classList.add('ppooff');