document.addEventListener("DOMContentLoaded", init);
function init() {
  addEvents();
}
function addEvents() {
  document.addEventListener('keydown',function(event){
    if(event.keyCode==13){
    addItem(); 
      
    };
})
  document.getElementById("1").addEventListener("paste", handlePaste);
  document.querySelector(".form").addEventListener("keyup",focusBox);
  document.querySelector('.content').addEventListener('click',deleteItem);
  document.querySelector('.main .btn').addEventListener('click',addItem);
}
const input1 = document.getElementById("1");
const input2 = document.getElementById("2");
const input3 = document.getElementById("3");
const input4 = document.getElementById("4");
input1.focus();
function handlePaste(e) {
  var clipboardData, pastedData;
  e.stopPropagation();
  e.preventDefault();
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData("Text");
  if(pastedData.length==16 && !isNaN(pastedData)){
    input1.value = pastedData.substring(0, 4);
  input2.value = pastedData.substring(4, 8);
  input3.value = pastedData.substring(8, 12);
  input4.value = pastedData.substring(12, 16);
  input4.focus();  
  } else{
    alert("please fill correct card number");
  }
}
 function focusBox(event) {
  if (event.target.value.length == 4 && event.target.id != "4") {
    let prev = parseInt(event.target.id);
    let next = prev + 1;
    document.getElementById(`${next}`).focus();
  }
  // if(input4.value.length==4){
      // document.querySelector('.btn').focus();
  // }
}
//add card in list
function addItem(){
const ul=document.querySelector('.content');
const li=document.createElement('li');
const butt=document.createElement('input');
const div=document.createElement('div');
div.setAttribute('class','item');
butt.setAttribute('class','del');
butt.type="button";
butt.value="Delete";
let allValue=`${input1.value}${input2.value}${input3.value}${input4.value}`;
if(allValue.length==16){
    li.innerHTML=`${input1.value}-${input2.value}-${input3.value}-${input4.value}`;
    div.appendChild(li);
    div.appendChild(butt);
    ul.appendChild(div);
    input1.value="";
    input2.value="";
    input3.value="";
    input4.value="";
    input1.focus();
}else{
    alert("card number length should be 16.");
}
}


// delete item 
function deleteItem(event){
    document.querySelector('.content').removeChild(event.target.parentNode);
}
