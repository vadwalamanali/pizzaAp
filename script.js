var checkbox = document.querySelectorAll("input[type='checkbox']");
var pricerange = document.querySelector("#amount");
pricerange.addEventListener("change",range); 

function range(){
	pricerange.value;
	filterValue();
	printValue();
	
}
for(var i = 0; i < checkbox.length; i++) {
	checkbox[i].addEventListener('change',filterValue);
	checkbox[i].addEventListener('change',printValue);
}
var pizzabase = document.querySelector("#pizzabase");
pizzabase.addEventListener("click",pizzaBase);
function pizzaBase(){
	var pizzabasevalue  = document.querySelector("#pizzabase").value;
	filterValue();
	printValue();
}
function printValue(){
	for(var i=0; i<val.length; i++){
		var printvalue=document.querySelector(".pizza__filter-value").innerHTML = "";
		 document.querySelector(".pizza__filter-value").innerHTML += `<span>${val[i]}</span>`
	}
}
var val = [];
function filterValue(){
  val.filter(word => {
		debugger
		var index = val.indexOf(event.target.value);
		if (index > -1) {
			val.splice(index, 1);
		}
		filterApply(val)
		return false;
	})
	if(event.target.checked) {
		val.push(event.target.value);
		filterApply(val)
	}
	if(event.target.getAttribute("id") === "amount"){
		val.push(event.target.value);
		filterApply(val)
	}
	if(event.target.getAttribute("id") === "pizzabase"){
		val.push(event.target.value);
		filterApply(val)
	}
}

var pizzaContainer = document.querySelectorAll(".pizza-details");
function filterApply(val) {
	if(val.length === 0) {
		for(var i=0;i<pizzaContainer.length;i++) {
			pizzaContainer[i].style.display="block";
		}
	}else{
		for(var i=0;i<pizzaContainer.length;i++) {
			pizzaContainer[i].style.display="none";
		}
		val.filter(word => {
			var elem = document.querySelectorAll(".pizza-details");
				for(var i=0;i<elem.length;i++){
					var attributeVal = elem[i].getAttribute("data-price")
					var attributeVal2 = elem[i].getAttribute("data-type")
					if(word === "veg" && attributeVal2 === "veg") {
						elem[i].style.display="block";
					}
					else if(word === "nonveg" && attributeVal2 === "nonveg") {
						elem[i].style.display="block";
					}	
					if(parseInt(event.target.value) >= 0 && parseInt(event.target.value) <=800 && parseInt(attributeVal) >= 0 && parseInt(attributeVal) <=800){
						elem[i].style.display="block";
					} 
				}	
		});
	}
}



