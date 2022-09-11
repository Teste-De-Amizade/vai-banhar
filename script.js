const btn_sim = document.getElementById("sim");
var behaviour = 0;
var gat = document.getElementById('gat');
var btn_nao = document.getElementById('nao');
var titulo = document.getElementById('title');
var uepa = new Audio("uepa.mp3");
var p = document.getElementById('p');

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();
        if (confirm('A new version of this site is available. Load it?')) {
          window.location.reload();
        }
      } else {
        // Manifest didn't changed. Nothing new to server.
      }
    }, false);
  
  }, false);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

setInterval(fugindo, 300);

function fugindo(){
    btn_sim.style.position = "absolute";
    let max_width = window.innerWidth -  btn_sim.offsetWidth;
    let max_height = window.innerHeight -  btn_sim.offsetHeight;

    btn_sim.style.top = `${getRndInteger(0, max_height)}px`;
    btn_sim.style.left = `${getRndInteger(0, max_width)}px`;
}

btn_nao.onclick = function(){
    gat.src = "cat_scared.jpg";
    titulo.innerText = "QUE FEIURA";
    btn_nao.style.display = "none";
    btn_sim.style.display = "none";
    uepa.play();
}
uepa.onended = function() {
    gat.src = "mad.jpg";
    titulo.innerText = "VAI BANHAR AGORA.";
    p.innerText = "PODRIDÃO.";
};