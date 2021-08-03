let currentVersion = "1.0.0.0";
let updateIndicator = document.getElementById('home_header_infos_span');

var requestURL = 'https://version.act-feed.repl.co/version.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let jsonObjVersion = request.response;
    let latestVersion = jsonObjVersion['version'];
    if (currentVersion === latestVersion){
        updateIndicator.innerText = "A jour";
    }
    else if (currentVersion !== latestVersion){
        updateIndicator.innerText = "MàJ disponible";
    }
}