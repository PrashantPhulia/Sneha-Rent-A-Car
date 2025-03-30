document.addEventListener("DOMContentLoaded", function() {
    const cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        car.addEventListener("mouseenter", () => {
            car.style.transform = "scale(1.15)";
            car.style.transition = "0.3s ease-in-out";
        });

        car.addEventListener("mouseleave", () => {
            car.style.transform = "scale(1)";
        });
    });
});
