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
    document.getElementById('loader_frame').style = 'transform: translateX(-20%); transition: .5s;';
}

document.getElementById('btn_news001').onclick = function(){
    document.getElementById('home_alpha').classList.toggle('zIndexHomeAlpha');
    document.getElementById('home_alpha').classList.toggle('under-transition-fade');
    document.getElementById('news001').classList.toggle('open-transition-slide');
    document.getElementById('home').style = 'transform: translateX(-120%); transition: .5s;';
}

document.getElementById('btn_back_news001').onclick = function(){
    document.getElementById('home_alpha').classList.toggle('zIndexHomeAlpha');
    document.getElementById('home_alpha').classList.toggle('under-transition-fade');
    document.getElementById('news001').classList.toggle('open-transition-slide');
    document.getElementById('home').style = 'transform: translateX(-100%); transition: .5s;';
}

setTimeout(() => { loaderEnding(); }, 2500);