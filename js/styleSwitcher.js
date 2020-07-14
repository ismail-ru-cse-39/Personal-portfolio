
const links = document.querySelectorAll(".alternate-style");
	  totalLenghth = links.length;

function setActiveStyle(color) {
	for(let i = 0; i < totalLenghth; i++) {
		if(color === links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		} else {
			links[i].setAttribute("disabled", "true");
		}
	}
}

//body skin

const bodySkins = document.querySelectorAll(".body-skin"),
	  totalBodySkin = bodySkins.length;
	  for(let i = 0 ; i < totalBodySkin; i++) {
	  	bodySkins[i].addEventListener("change", function(){
	  		if(this.value === "dark") {
	  			document.body.className = "dark";
	  		} else {
	  			document.body.className="light";
	  		}
	  	})
	  }

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
	console.log("hi");
	document.querySelector(".style-switcher").classList.toggle("open");
	console.log("after call")
})