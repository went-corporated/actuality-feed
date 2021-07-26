console.log("popup.js is connected.");

function randomize(min, max) {
    return Math.random() * (max - min) + min;
  }

function loaderEnding(){
    document.getElementById('loader_alpha').classList.toggle('under-transition-fade');
    document.getElementById('home').classList.toggle('open-transition-slide');
}

let loadingTime = randomize(300, 750);
setTimeout(() => { loaderEnding(); }, loadingTime);