const gameContainer = document.getElementById("container");
const slider = document.getElementById("slider");

//creates child divs within gamecontainer//
function divCreator(){
  for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    gameContainer.appendChild(div);
    
    div.className = (`cell-${i}`);
    div.style.backgroundColor = ('green');
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
    div.style.backgroundColor = ('green');
    div.onmousemove = function(){div.style.backgroundColor = "black"};
  }
}









































/*function divCreator(){

  for (let i = 1; i <= 256; i++){
    let div = document.createElement("div");
    gameContainer.appendChild(div);
    div.id = `${i}`;
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.background = "green";
    div.style.gridArea = `${i / 16} / ${i / 16}`;
    containerHeight = `${i}px`;
    containerWidth = `${i}px`;
  }



function divCreator(){
  
  gameContainer.style.display = "flex";
  gameContainer.style.flexWrap = "wrap";
  gameContainer.style.width = "512px";
  gameContainer.style.height = "auto";

  for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    gameContainer.appendChild(div);
    div.id = `cell-${i}`;
    div.style.width = "32px";
    div.style.height = "32px";
    div.style.background = "green";
    div.style.flexShrink = "1";
    div.onmousemove = function(){div.style.background = "black"};   
    
    adjustBtn.onclick = buttonHandler;

    function buttonHandler(){  
  
      let gridNum = prompt('Choose a number between 1 and 100 to determine the number of squares per side of grid.');
       
       for (let x = gridNum; x <= 100; x++){
         if(x >= 1 && x <= 100){
           console.log(x);
           document.getElementById('pixels').style.width = `${x}px`;
           document.getElementById('pixels').style.height = `${x}px`;
           gameContainer.style.height = `${(x * x)/2}px`;
           gameContainer.style.width = `${(x * x)/2}px`;
           break;
       }
     }
   }
  }
}}*/

divCreator();


