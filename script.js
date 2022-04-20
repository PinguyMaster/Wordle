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

const words = ["HELLO","STRIN","VARIA"];
var wSelector = Math.floor(Math.random() * 3);
var currentWord="";
console.log(words[wSelector][1]);
if ("e"==words[wSelector][1])
{
	          console.log("random Flag 1234567");
}
var rows=1;
function wordSelect(letter){
	if(currentWord.length<5){
		currentWord = currentWord + letter;
		console.log("Letter: " + letter);
		console.log("Word: " + currentWord);
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

function enter(){
	let rowBoxes = document.getElementById("row"+rows).children;
//	if(list.includes(currentWord)){
		//colourBoxes();
		for(var i=0;i<5;i++){
			if(currentWord[i]==words[wSelector][i]){
				rowBoxes[i].classList.add("rlrp");
  				wordSelect(letter).classList.add("rlrp");
			}	
			else if(words[wSelector].includes(currentWord[i])){	
				rowBoxes[i].classList.add("rlwp");
				wordSelect(letter).classList.add("rlwp");
			}
			else{
				rowBoxes[i].classList.add("wlwp");
				wordSelect(letter).classList.add("wlwp");
			}
		}	
		rows++;
//	} else {
//		for(var i=0;i<5;i++){
//				rowBoxes[i].innerText='';
//		}	}
	currentWord=''; }
function backspace(){
var rowBoxes = document.getElementById("row"+rows).children.value;
document.getElementById("row"+rows).children.value=rowBoxes.substring(0,rowBoxes.length-1);
console.log('is beingcalled')
}
