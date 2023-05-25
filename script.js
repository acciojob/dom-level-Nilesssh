//your JS code here. If required.
const lis = document.querySelectorAll("li");
lis.forEach((value,index)=>{
	if(value.id==="level"){
		alert(`The level of the element is: ${index+1}`);
	}
})