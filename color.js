var elementEvent = document.getElementById("background")
elementEvent.addEventListener("input", changeBackground, false);

function changeBackground(){
 		document.body.style.backgroundColor=this.value;
}