console.log("script.js is connected.");

// document.getElementById('ui_controller').oncontextmenu = function(){
//     contextualMenu();
//     return false;
// }

function contextualMenu(){
    document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
    document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
}

// Display is readed.
function displayIsReaded(){
    if (localStorage.getItem("news001") == "true"){
        document.getElementById('text_markasread_news001').innerText = "(lu)";
    }
    else if (localStorage.getItem("news001") == "false"){
        document.getElementById('text_markasread_news001').innerText = "";
    }

    if (localStorage.getItem("news002") == "true"){
        document.getElementById('text_markasread_news002').innerText = "(lu)";
    }
    else if (localStorage.getItem("news002") == "false"){
        document.getElementById('text_markasread_news002').innerText = "";
    }
}

displayIsReaded();
// endsection