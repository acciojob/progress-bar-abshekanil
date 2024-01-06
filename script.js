//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){
	const circles = document.querySelectorAll(".circle");
	const prevBtn = document.getElementsById("prevBtn");
	const nextBtn = document.getElementsById("nextBtn");

	let currentIndex = 0;

	updateButtonState();

	prevBtn.addEventListener("click" function(){
		if(currentIndex > 0)
		{
			currentIndex--;
			updateButtonState();
		}
	});

	nextBtn.addEventListener
});