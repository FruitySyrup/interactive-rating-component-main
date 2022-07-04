
// code for selecting rating

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

// code for thank you page to show what rating you selected

// const reportedRating = document.querySelector('#Selected-Rating');
const submittedRating = document.getElementsByClassName(".selected");
let reportedRating = submittedRating.dataset.rating;
const ratedText = document.querySelector("span");

ratedText.textContent = reportedRating;

console.log(reportedRating);