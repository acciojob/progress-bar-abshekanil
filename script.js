//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){
	const circles = document.querySelectorAll(".circle");
	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");

	let currentIndex = 0;

	updateButtonState();

	prevBtn.addEventListener("click", function(){
		if(currentIndex > 0)
		{
			currentIndex--;
			updateButtonState();
		}
	});  


	nextBtn.addEventListener("click", function(){
		if(currentIndex < circles.length - 1)
		{
			currentIndex++;
			updateButtonState();
		}
	}); 

		function updateButtonState(){
			circles.forEach((circle, index) =>{
				if(index === currentIndex)
				{
					circle.classList.add("active");
				}
				else{
					circle.classList.remove("active");
				}
			});

			prevBtn.disabled = currentIndex === 0;
			nextBtn.disabled = currentIndex === circles.length - 1;
		}
});