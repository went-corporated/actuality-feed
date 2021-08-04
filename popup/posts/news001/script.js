console.log("script.js is connected.");

function randomize(min, max) {
    return Math.random() * (max - min) + min;
}

// document.getElementById('ui_controller').oncontextmenu = function(){
//     contextualMenu();
//     return false;
// }

function contextualMenu(){
    document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
    document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
}

document.getElementById('btn_tablecontent_news001').onclick = function(){ document.getElementById('table_content_news001').classList.toggle('table-content-open'); }

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
        document.getElementById('btn_markasread_news001').classList.add('bg-green');
        console.log("d");
    }
    else if (localStorage.getItem("news001") == "false"){
        document.getElementById('btn_markasread_news001').classList.remove('bg-green');
    }
}

displayIsReaded();
// endsection