var number=document.getElementsByClassName("number");
var operator=document.getElementsByClassName("operator");
var evaluate=document.getElementById("eval");
var display=document.getElementById("output");
var hi=document.getElementById("history");
var clear=document.getElementById("C");
var clearEntry=document.getElementById("CE");
var output="";
for(let i=0;i<number.length;i++){
	number[i].addEventListener("click", function(){
		output=output+this.textContent;
		hi.textContent=output;
	})
}
for(let i=0; i<operator.length;i++){
	operator[i].addEventListener("click", function(){
		// console.log(this.textContent);
		output=output+this.textContent;
		hi.textContent=output;
	})
}
evaluate.addEventListener("click", function(){
	let ans=eval(output);
	console.log(ans);
	output="";
	display.textContent=ans;
})
clear.addEventListener("click", function(){
	display.textContent="0";
})
clearEntry.addEventListener("click", function(){
	output=output.substring(0, output.length-1);
	hi.textContent=output;
})
