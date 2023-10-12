const gameContainer = document.getElementById("container");
const slider = document.getElementById("slider");

//creates child divs within gamecontainer//
function divCreator(){
  for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    gameContainer.appendChild(div);
    
    div.className = (`cell-${i}`);
    div.style.backgroundColor = ('lightgray');
    div.onmousemove = function(){div.style.backgroundColor = "black"};
  }
}
//function to be used in event listener, allows readjusting of grid size when called
function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

//adjusts grid size by using slider 
const sliderVal = document.querySelector('.value');
slider.oninput = function(){
  let val = document.getElementById('slider').value;
  sliderVal.textContent = val;
  removeAllChildNodes(gameContainer);
  gameContainer.style.gridTemplateColumns = (`repeat(${val}, 2fr)`);
  gameContainer.style.gridTemplateRows = (`repeat(${val}, 2fr)`);
  for (let i = 0; i < val * val; i++){
    const div = document.createElement("div");
    gameContainer.appendChild(div);
    
    div.className = (`cell-${i}`);
    div.style.backgroundColor = ('lightgray');
    div.onmousemove = function(){div.style.backgroundColor = "black"};
  }
}

divCreator();
