//your JS code here. If required.
const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
	if(lis[i].id==="level"){
		alert(`The level of the element is: ${i+1}`)
	}
}