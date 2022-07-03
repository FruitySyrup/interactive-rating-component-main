
const selectedRating = document.querySelectorAll("[data-rating]");

const selectedRatingSelected = document.querySelectorAll(".selected");


selectedRating.forEach((selectedRating) => {
	selectedRating.addEventListener("click", () => {
		if (selectedRating.classList.contains("selected")) {
			selectedRating.classList.remove("selected");
		} else {
			selectedRatingWithIsOpen.forEach((selectedRatingWithIsOpen) => {
				selectedRatingWithIsOpen.classList.remove("selected");
			});
			selectedRating.classList.add(".selected");
		}
	});
});