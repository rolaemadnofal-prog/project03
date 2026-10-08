let count = 0;

const countDisplay = document.getElementById("count");

const incrementButton = document.getElementById("increment");

const decrementButton = document.getElementById("decrement");

const resetButton = document.getElementById("reset");




function updateDisplay(){

	countDisplay.textContent = count;

 if(count > 0)
	countDisplay.style.color = "green";


 else if(count < 0)
	countDisplay.style.color = "red";

 else
 	countDisplay.style.color = "black";
}


function increment(){
	count++;
	updateDisplay();
}

function decrement(){
	count--;
	updateDisplay();
}

function reset(){
	count = 0;
	updateDisplay();
}

incrementButton.addEventListener("click",increment);
decrementButton.addEventListener("click",decrement);
resetButton.addEventListener("click",reset);
