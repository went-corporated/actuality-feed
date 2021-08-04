let currentVersion = "1.0.0.0";
let updateIndicator = document.getElementById('home_header_infos_span');
let titleHeader = document.getElementById('home_header_title');

var requestURL = 'https://version.act-feed.repl.co/version.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let jsonObjVersion = request.response;
    let latestVersion = jsonObjVersion['version'];
    let name = jsonObjVersion['name'];
    // titleHeader.innerText = name;
    if (currentVersion === latestVersion){
        updateIndicator.innerText = "A jour";
    }
    else if (currentVersion !== latestVersion){
        updateIndicator.innerText = "MàJ disponible";
    }
}