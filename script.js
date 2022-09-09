console.log("hi")
let addBtn = document.getElementById("btn");
let input = document.getElementById("inputitem");
let itemList = document.getElementById("items_list");



function addItem(){
	// alert("hi");
	let inputData = input.value;
	if (inputData != ' '){
		
	
	let li = document.createElement("li");
	li.innerText = inputData;
	itemList.appendChild(li);
	li.style.cssText = 'list-style-type: none';
	input.value = ' ';
	input.focus();
	let trash = document.createElement("i");
	trash.classList.add("fas", "fa-trash");
	li.appendChild(trash);
	console.log(li);
}
else{
	alert("no data");
}
    
}
function deleteItem(event){
	// console.log(event);
	if(event.target.classList[0] === "fas"){ 
		let item = event.target.parentElement;
		item.remove();
	}
}
addBtn.addEventListener("click", addItem);

itemList.addEventListener("click", deleteItem);