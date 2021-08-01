console.log("popup.js is connected.");

let loaderEnded = false;

function randomize(min, max) {
    return Math.random() * (max - min) + min;
}

document.getElementById('ui_controller').oncontextmenu = function(){
    contextualMenu();
    return false;
}

function contextualMenu(){
    if (loaderEnded == true){
        document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
        document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
    }
}

function loaderEnding(){
    document.getElementById('loader_alpha').classList.toggle('under-transition-fade');
    document.getElementById('home').classList.toggle('open-transition-slide');
    document.getElementById('loader_frame').style = 'transform: translateX(-20%); transition: .5s;';
    loaderEnded = true;
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

// Mark as read.
document.getElementById('btn_markasread_news001').onclick = function(){
    if (localStorage.getItem("news001") == "true"){
        localStorage.setItem("news001", "false");
    }
    else{
        localStorage.setItem("news001", "true");
    }
    displayIsReaded();
}
// endsection

// Display is readed.
function displayIsReaded(){
    if (localStorage.getItem("news001") == "true"){
        document.getElementById('text_markasread_news001').innerText = "(lu)";
    }
    else if (localStorage.getItem("news001") == "false"){
        document.getElementById('text_markasread_news001').innerText = "";
    }
}

displayIsReaded();
// endsection