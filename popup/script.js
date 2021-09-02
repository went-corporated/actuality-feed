console.log("popup.js is connected.");

if (sessionStorage.getItem("welcome-screen") === "true"){
    document.getElementById('welcome_screen').style = 'display: none;';
}
sessionStorage.setItem("welcome-screen", "true");

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

document.getElementById('btn_toggle_news_panel').onclick = function(){
    toggleNewsPanel();
}
document.getElementById('content_news_panel_navbar').onclick = function(){
    toggleNewsPanel();
}

let IsNewsPanelDisplayed = false;
function toggleNewsPanel(){
    if (IsNewsPanelDisplayed === false){
        document.getElementById('news_panel').style = 'transform: translateY(-100%);';
        document.getElementById('btn_toggle_news_panel').style = 'transform: translateX(-100%);';
        document.getElementById('content_news_panel_navbar').style = 'transform: translateY(0%);';
        IsNewsPanelDisplayed = true;
    } else {
        document.getElementById('news_panel').style = 'transform: translateY(0%);';
        document.getElementById('btn_toggle_news_panel').style = 'transform: translateX(0%);';
        document.getElementById('content_news_panel_navbar').style = 'transform: translateY(0%);';
        IsNewsPanelDisplayed = false;
    }
}

document.getElementById('content_news_panel_navbar').onmouseover = function(){
    document.getElementById('content_news_panel_navbar').innerText = "Fermer le panel";
}
document.getElementById('content_news_panel_navbar').onmouseout = function(){
    document.getElementById('content_news_panel_navbar').innerText = "Panel à news";
}

let newsPanelItemColorAlternatorColorIndicator = true;
function newsPanelItemColorAlternator(){
    document.querySelectorAll('#content_news_panel_news_list>ul>li').forEach(function(newsPanelItem){
        if (newsPanelItemColorAlternatorColorIndicator === false){
            newsPanelItem.style = 'background-color: rgb(240, 240, 240);';
            newsPanelItemColorAlternatorColorIndicator = true;
        } else {
            newsPanelItem.style = 'background-color: white;';
            newsPanelItemColorAlternatorColorIndicator = false;
        }
    });
}

newsPanelItemColorAlternator();