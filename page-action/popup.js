var font = document.getElementById('font');

font.onclick = function(){
    var fontIsChecked = font.checked;

    if (fontIsChecked == true) {
        browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
        browser.tabs.insertCSS({file: "../modify/font.css"});
        alert("font.css est inséré. du moins je suppose :)");
    } else {
        browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
        browser.tabs.removeCSS({file: "../modify/font.css"});
    }

    browser.storage.local.set({fontIsChecked})
}