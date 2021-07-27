console.log("popup.js is connected.");

function randomize(min, max) {
    return Math.random() * (max - min) + min;
}

document.getElementById('ui_controller').oncontextmenu = function(){
    return false;
}

function loaderEnding(){
    document.getElementById('loader_alpha').classList.toggle('under-transition-fade');
    document.getElementById('home').classList.toggle('open-transition-slide');
}

document.getElementById('btn_news001').onclick = function(){
    document.getElementById('home_alpha').classList.toggle('zIndexHomeAlpha');
    document.getElementById('home_alpha').classList.toggle('under-transition-fade');
    document.getElementById('news001').classList.toggle('open-transition-slide');
}

setTimeout(() => { loaderEnding(); }, 2000);