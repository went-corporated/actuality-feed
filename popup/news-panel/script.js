console.log("script.js is connected.");

// document.getElementById('ui_controller').oncontextmenu = function(){
//     contextualMenu();
//     return false;
// }

function contextualMenu(){
    document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
    document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
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

let text_le_developpement_d_entpp_reprend_officiellement_2921_indicator = false;
document.getElementById('btn_le_developpement_d_entpp_reprend_officiellement_2921').onclick = function(){
    if (text_le_developpement_d_entpp_reprend_officiellement_2921_indicator === false){
        document.getElementById('text_le_developpement_d_entpp_reprend_officiellement_2921').classList.remove('cnpnl-false');
        document.getElementById('btn_le_developpement_d_entpp_reprend_officiellement_2921').innerText = "Masquer la suite";
        text_le_developpement_d_entpp_reprend_officiellement_2921_indicator = true;
    } else {
        document.getElementById('text_le_developpement_d_entpp_reprend_officiellement_2921').classList.add('cnpnl-false');
        document.getElementById('btn_le_developpement_d_entpp_reprend_officiellement_2921').innerText = "Afficher la suite";
        text_le_developpement_d_entpp_reprend_officiellement_2921_indicator = false;
    }
}