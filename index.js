const gameContainer = document.getElementById("container");

function divCreator(){
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  gameContainer.style.display = "flex";
  gameContainer.style.flexWrap = "wrap";
  gameContainer.style.width = "1024px";
  gameContainer.style.height = "1024px";

  for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.style.width = "64px";
    div.style.height = "64px";
    div.style.background = "red";
    div.className = "pixels";
    div.onmousemove = function(){
      div.style.background = "black";
    }
    gameContainer.appendChild(div);
  }
}

divCreator();


