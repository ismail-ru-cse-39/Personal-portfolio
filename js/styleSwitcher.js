
const links = document.querySelectorAll(".alternate-style");
	  totalLenghth = links.length;

function setActiveStyle(color) {
	for(let i = 0; i < totalLenghth; i++) {
		if(color == links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		} else {
			links[i].setAttribute("disabled", "true");
		}
	}
}

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
	console.log("hi");
	document.querySelector(".style-switcher").classList.toggle("open");
	console.log("after call")
})