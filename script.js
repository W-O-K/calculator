let panel = document.querySelector(".screen");
let keys = document.querySelector(".keys");
let temp = [];
let value1Mem = "";
let value2Mem = 0;
let prev = 0;
// listen to numbers & decimal
function numKeys(){
keys.addEventListener("click", function(e) {
  if(e.target && e.target.classList.length == 0) {
		temp.push(e.target.value);
		panel.innerText = temp.join('');
  };
});
}
// listen to operators
function operatorCheck(){
keys.addEventListener("click", function(e) {
  if(e.target && e.target.classList.contains("operator")) {
		storeNum();
		if(e.target.value == "+"){
    		console.log(prev, value1Mem);
    		add();
    		console.log(prev, value1Mem);
    }else if(e.target.value == "-"){
    	console.log(prev, value1Mem);
    	sub();
    	console.log(prev, value1Mem);
    }else if(e.target.value == "÷"){
    	//call function for this
    }else if(e.target.value == "x"){
    	//call function for this
    };
};
});
}

function storeNum(){
	value1Mem = temp.join('');
		temp = [];
}
function add(){
	prev += Number(value1Mem);
    value1Mem = "";
    panel.innerText = prev;
}
function sub(){
    	
}
numKeys();
operatorCheck();
