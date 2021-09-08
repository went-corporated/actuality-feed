let currentVersion = "1.2.0";
let updateIndicator = document.getElementById('home_header_infos_span');
let titleHeader = document.getElementById('home_header_title');

var requestURL = 'https://went-lab.github.io/json-hosting/version.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let jsonObjVersion = request.response;
    let latestVersion = jsonObjVersion['actualityfeed'];
    if (currentVersion === latestVersion){
        updateIndicator.innerText = "A jour";
    }
    else if (currentVersion !== latestVersion){
        updateIndicator.innerText = "MàJ disponible";
    }
}