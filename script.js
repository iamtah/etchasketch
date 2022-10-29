let gridHolder =document.createElement("div");
gridHolder.classList.add("grid-holder");
let body = document.querySelector("body");

body.appendChild(gridHolder);

var slider = document.getElementById("myRange");
let isRainbow = false;
var output = document.getElementById("sliderOut");

const colorpicker = document.getElementById("owncolor");
let divs = document.querySelectorAll(".gridCell");
const EraserButton = document.getElementById("Eraser");
const rainbowButton = document.getElementById("rainbow");



function createGrid(){
  let gridSize = 720/slider.value;
  let gridBoxes = slider.value*slider.value;
  
for(i=0;i<gridBoxes;i+=1){
    var gridDiv =document.createElement("div");
    gridDiv.style.cssText=`width:${gridSize}px; height:${gridSize}px;`
    gridDiv.classList.add("gridCell");
    gridHolder.appendChild(gridDiv);
}}
createGrid();




output.innerText= slider.value; 


slider.oninput = function() {
  var valued = this.value;
  output.innerHTML = valued +"x" +valued;
}



function removeGrid(){
  const collection = document.querySelectorAll('.gridCell');
  for (let i = 0; i < collection.length; i++) {
      const elem = collection[i];
      elem.parentNode.removeChild(elem);
  }
}


function sliderCreate(){
  removeGrid();
  createGrid();
  divs = document.querySelectorAll(".gridCell");
  listendivs();
}

slider.addEventListener("change", sliderCreate);



let color = "black";


function listendivs(){

divs.forEach(div => {
        div.addEventListener('mouseover', function() {    
        div.style.backgroundColor = `${color}`;
      }
      
      )})} 
    
listendivs();



EraserButton.addEventListener("click", () => {isRainbow=false 
color = "white"});

colorpicker.addEventListener("change", function(){ color = colorpicker.value;
}
);

const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}



rainbowButton.addEventListener("click",function(){
isRainbow ? isRainbow =false : isRainbow = true
divs.forEach(div => {
  div.addEventListener('mouseenter', () =>{
  if(isRainbow){
   color = randColor();
  }})    
    
  });
});

// if(isRainbow){
  
// }


// let DivClicked = false;
// function isDivClicked(){
// DivClicked ? DivClicked =false : DivClicked=true;
// }



// gridHolder.addEventListener("drag",)