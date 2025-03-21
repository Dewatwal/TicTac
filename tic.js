let elements = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let h1 = document.querySelector(".heading");
let val = true;
const winPatterns= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];


elements.forEach((element)=>{
element.addEventListener("click",()=>{
  if(val){
    element.innerText = "0";
  }
  else{
    element.innerText = "1";
  }
  element.style.backgroundColor = "#ff1";  
  element.style.cursor = 'not-allowed';
  val = !val;
  element.disabled = true;
  checkwinner();
})
}) 
let s;
const checkwinner = ()=>{
  for(let pattern of winPatterns){
  let p1 = elements[pattern[0]].innerText;
  let p2 = elements[pattern[1]].innerText;
  let p3 = elements[pattern[2]].innerText;
  if(p1 != "" && p2!= "" && p3 !=" "){
    if(p1===p2 && p2===p3){
          s= p1;
         decWinner();
    }
  }
  }
  } 
  let winner;
const decWinner = ()=>{
  winner = document.createElement("p");
  winner.innerText = `winner is  ${s} `;
  h1.prepend(winner);
}
const enableElements = ()=>{
  for(let element of elements){
    element.disabled = false;
    element.style.backgroundColor = "#fff";
    element.innerText = "";
    element.style.cursor ="";
    winner.innerText = "";
  }
  val = true;
  
}
reset.addEventListener("click",enableElements);