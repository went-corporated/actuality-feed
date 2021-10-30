document.getElementById('ui_controller').oncontextmenu = function(){
    contextualMenu();
    return false;
}

function contextualMenu(){
    document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
    document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
}

function trackMouse(event){
    var x = event.clientX;
    var y = event.clientY;
    document.querySelector('.square').style = `transform: rotateX(0deg) rotateY(0deg) translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 75%)); backdrop-filter: blur(5px); position: absolute; top: 0; left:0; margin: 0; padding: 0; width: 150px; height: 150px; background-color: rgba(0, 0, 0, 0); z-index: 100000;`;
}

document.querySelector('body').onmousemove = function(){trackMouse(event)};