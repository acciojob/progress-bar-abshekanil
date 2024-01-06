document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const lines = document.querySelectorAll(".line");

    let currentIndex = 0;

    updateButtonState();

    prevBtn.addEventListener("click", async function () {
        if (currentIndex > 0) {
            currentIndex--;
            await updateButtonState();
        }
    });

    nextBtn.addEventListener("click", async function () {
        if (currentIndex < circles.length - 1) {
            circles[currentIndex].classList.add("previous");
            currentIndex++;
            await updateButtonState();
        }
    });

    async function updateButtonState() {
        for (let index = 0; index < circles.length; index++) {
            const circle = circles[index];

            if (index === currentIndex) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }

            if (index < currentIndex) {
                circle.classList.add("previous");
            } else {
                circle.classList.remove("previous");
            }
        }

        for (let index = 0; index < lines.length; index++) {
            const line = lines[index];

            if (index < currentIndex) {
                line.classList.add("active");
            } else {
                line.classList.remove("active");
            }
        }

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === circles.length - 1;
    }
});
