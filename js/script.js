
window.addEventListener("load", function(){
	document.querySelector(".preloader").classList.add("opacity-0");
	setTimeout(function(){
		ocument.querySelector(".preloader").style.display="none";
	}, 1000)
})


//Portfolio item filter

const filterContainer = document.querySelector(".portfolio-filter"),
	filterBtns = filterContainer.children,
	totalFilterBtn = filterBtns.length,
	portfolioItems = document.querySelectorAll(".portfolio-item"),
	totalPortfolioItems = portfolioItems.length;


	for(let i = 0 ; i  < totalFilterBtn; i++) {
		filterBtns[i].addEventListener("click", function() {
			filterContainer.querySelector(".active").classList.remove("active");
			this.classList.add("active");

			const filterValue = this.getAttribute("data-filter");
			for(let k=0; k < totalPortfolioItems; k++) {
				if(filterValue === portfolioItems[k].getAttribute("data-category")) {
					portfolioItems[k].classList.remove("hide");
					portfolioItems[k].classList.add("show");
				} else{
					portfolioItems[k].classList.remove("show");
					portfolioItems[k].classList.add("hide");
				}
				if(filterValue == "all") {
					portfolioItems[k].classList.remove("hide");
					portfolioItems[k].classList.add("show");
				}
			}
		})
	}



// portfolio lightbox

const lightbox = document.querySelector(".lightbox"),
	  lightboxImg = lightbox.querySelector(".lightbox-img"),
	  lightboxText = lightbox.querySelector(".caption-text"),
	  lightboxClose = lightbox.querySelector(".lightbox-close"),
	  lightboxCounter = lightbox.querySelector(".caption-counter");

	let itemIndex = 0;

	for(let i=0; i<totalPortfolioItems; i++) {
		portfolioItems[i].addEventListener("click", function(){
			itemIndex = i;
			changeItem();
			toggleLightbox();
		})
	}

	function nextItem() {
		if(itemIndex === totalPortfolioItems-1){
			itemIndex = 0;
		} else {
			itemIndex++;
		}

		changeItem();
	}

	function prevItem() {
		if(itemIndex === 0) {
			itemIndex = totalPortfolioItems-1;
		} else {
			itemIndex--;
		}
		changeItem();
	}

	function changeItem(){
		imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
		lightboxImg.src = imgSrc;
		lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
		lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItems;
	}

	function toggleLightbox() {
		lightbox.classList.toggle("open");
	}

	// close lightbox
	
	lightbox.addEventListener("click", function(event){
		if(event.target === lightboxClose || event.target === lightbox) {
			toggleLightbox();
		}
	})


	// Aside Navbar
	const nav = document.querySelector(".nav"),
		 navList = nav.querySelectorAll("li"),
		 totalNavList = navList.length;
		 allSection = document.querySelectorAll(".section");
		 totalSection = allSection.length;

	for(let i = 0; i < totalNavList; i++) {
		const a = navList[i].querySelector("a");
		a.addEventListener("click", function(){
			for(let i = 0; i < totalSection; i++) {
				allSection[i].classList.remove("back-section");
			}
			for(let j = 0; j < totalNavList; j++) {
				if(navList[j].querySelector("a").classList.contains("active")){
					allSection[j].classList.add("back-section");
				}
				navList[j].querySelector("a").classList.remove("active");
			}

			this.classList.add("active");
			showSection(this);

			if(window.innerWidth < 1200) {
				asideSectionTogglerBtn();
			}
		})
	}

	function showSection(element){
		for(let i = 0; i < totalSection; i++) {
			allSection[i].classList.remove("active");
		}
		const target = element.getAttribute("href").split("#")[1];
		document.querySelector("#"+target).classList.add("active");
	}

	const navTogglerBtn = document.querySelector(".nav-toggler"),
		  aside = document.querySelector(".aside");

		  navTogglerBtn.addEventListener("click", () =>{
		  	asideSectionTogglerBtn();
		  })

	function asideSectionTogglerBtn() {
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
		for(let i = 0; i < totalSection; i++) {
			allSection[i].classList.toggle("open");
		}
	}