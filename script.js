document.querySelector("#reset").addEventListener("click", () => {
	const fw = document.querySelector(".firework");
	let svgHTML = fw.innerHTML;
	fw.innerHTML = svgHTML;
	lit = false;
	addListener();
});

let lit = false;

function addListener() {
	// Attach the event listener to the SVG container
	const lightMe = document.querySelector("#lightMe");
	document.querySelector(`#flickers`).setAttribute("transform", `translate(-1 -1)`);
	const shootIt = () => {
		if (!lit) {
			document.querySelector(`#flickers`).setAttribute("transform", `translate(0 0)`);
			document.querySelector(`#fuseAnim`).beginElement();
			document.querySelector(`#burnDown`).beginElement();
			document.querySelector(`#flicker1`).beginElement();
			document.querySelector(`#flicker2`).beginElement();
			document.querySelector(`#flicker3`).beginElement();
			lit = true;
			setTimeout(() => {
				document.querySelector(".body2").style.opacity = "1";
			}, 12000);
			setTimeout(() => {
				document.querySelector(".body2").style.opacity = "0";
			}, 12700);
		}
	}
	lightMe.addEventListener("mouseover", () => {
		shootIt();
	});
	lightMe.addEventListener("click", () => {
		shootIt();
	});
}

addListener();