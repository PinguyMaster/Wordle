                        list = [];
                        var xmlhttp = new XMLHttpRequest();
                        var url = "words.json";
                        xmlhttp.onreadystatechange = function() {
				                                if (this.readyState == 4 && this.status == 200) {
									                                    list = JSON.parse(this.responseText);
									                                }
				                        };

                        xmlhttp.open("GET", url, true);
                        xmlhttp.send();

var win = false;
const words = ["HELLO","STRIN","VARIA"];
var wSelector = Math.floor(Math.random() *3);
var currentWord="";
console.log(words[wSelector][1]);
if ("e"==words[wSelector][1])
{
	          console.log("random Flag 1234567");
}
var rows=1;
function wordSelect(letter){
	if(letter!='b'){
    if(currentWord.length<5){
		currentWord = currentWord + letter;
		console.log("Letter: " + letter);
		console.log("Word: " + currentWord);
  	}
  }	else{
    if(currentWord.length<=5){
		currentWord = currentWord.slice(0, -1);
		console.log("Word: " + currentWord);
  	}
  }
		let rowBoxes = document.getElementById("row"+rows).children;
		for(var i=0;i<5;i++){
			if (i < currentWord.length) {
				rowBoxes[i].innerText=currentWord[i];
			} else {
				rowBoxes[i].innerText='';
			}
			//console.log(count);
		}
}
let wRong = document.getElementById("wRong");
function openWrong(){
  wRong.classList.add("wrong-open");
}
function closeWrong(){
  wRong.classList.remove("wrong-open");
}
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("popup-open");
}
function closePopup() {
  popup.classList.remove("popup-open");
}

const keyboard = document.getElementById("Keyboard");
function enter(){
	let rowBoxes = document.getElementById("row"+rows).children;
	if(list.includes(currentWord)){
		//colourBoxes();
		for(var i=0;i<5;i++){
		currentLetter = document.getElementById(currentWord[i].toLowerCase());
			if(currentWord[i]==list[wSelector][i]){
				rowBoxes[i].classList.add("rlrp");
  			currentLetter.classList.add("rlrp");
			}	
			else if(list[wSelector].includes(currentWord[i])){	
				rowBoxes[i].classList.add("rlwp");
				currentLetter.classList.add("rlwp");
			}
     		else{
				rowBoxes[i].classList.add("wlwp");
				currentLetter.classList.add("wlwp");

			} 
      if(list[wSelector].toLowerCase()==currentWord.toLowerCase())
      {
        openPopup();
        keyboard.setAttribute('disabled','');
      }	
		}	
		rows++;
    if (rows==7 &&list[wSelector].toLowerCase()!=currentWord.toLowerCase()){
    openWrong();
    }
	} else {
		for(var i=0;i<5;i++){
				rowBoxes[i].innerText='';
		}	}
	currentWord=''; }


function backspace(){
var rowBoxes = document.getElementById("row"+rows).children.value;
document.getElementById("row"+rows).children.value=rowBoxes.substring(0,rowBoxes.length-1);
console.log('baked potatoe')
}