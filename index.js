function loadScripts() {
    const container = document.getElementById("container");
    container.addEventListener("touchstart", pulse, false);
    container.addEventListener("touchmove", pulse, false);
  }

function pulse(){
    navigator.vibrate(200)
}