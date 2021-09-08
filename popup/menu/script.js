console.log("script.js is connected.");

// document.getElementById('ui_controller').oncontextmenu = function(){
//     contextualMenu();
//     return false;
// }

function contextualMenu(){
    document.getElementById('contextual_menu').classList.toggle('contextual-menu-open');
    document.getElementById('contextual_menu_alpha').classList.toggle('contextual-menu-alpha-open');
}