// Helper Functions
let get = function(id) {
	return document.getElementById(id);
}

let createMan = function(i) {
	let cont = document.createElement("div");
	cont.className = "input-group"

	let label = document.createElement("label");
	let input = document.createElement("input");
	input.type="text";
	label.innerHTML = "m<sub>" + i + "</sub>";
	label.width="75px";
	cont.appendChild(label);
	cont.appendChild(input);
	get("preferenceMen").appendChild(cont);
}
let createWoman = function(i) {
	let cont = document.createElement("div");
	cont.className = "input-group"

	let label = document.createElement("label");
	let input = document.createElement("input");
	input.type="text";
	label.innerHTML = "w<sub>" + i + "</sub>";
	label.width="75px";
	cont.appendChild(label);
	cont.appendChild(input);
	get("preferenceWomen").appendChild(cont);
}

let updateProblemSize = function() {
	n  = get('problemSize').value - 0;
	n -= 0;
	get('problemSizeLabel').innerHTML = "n = " + n;

	let previous = get("preferenceMen").children.length;
	if(previous < n) {
		for(let i = previous; i < n; i++) {
			createMan(i+1);
			createWoman(i+1);
		}
	}
	else if(previous > n) {
		for(let i = n; i < previous; i++) {
			get("preferenceMen").lastElementChild.remove();
			get("preferenceWomen").lastElementChild.remove();
		}
	}
}
// 

let n;

get("problemSize").addEventListener('input', updateProblemSize)



// document.ready --
updateProblemSize();