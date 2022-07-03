
const selectedRating = document.querySelectorAll("[data-rating]");



selectedRating.forEach((selectedRating) => {
	selectedRating.addEventListener("click", () => {
		if (selectedRating.classList.contains("selected")) {
			selectedRating.classList.remove("selected");
		} else {
            const selectedRatingSelected = document.querySelectorAll(".selected");

			selectedRatingSelected.forEach((selectedRatingSelected) => {
				selectedRatingSelected.classList.remove("selected");
			});
			selectedRating.classList.add("selected");
		}
	});
});