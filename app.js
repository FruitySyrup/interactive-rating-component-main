
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

// when click submit remove hidden classes from second rate-me-page section

const buttonTag = document.querySelector("a");
const frontPage = document.querySelector("section.rate-me-page");
const thankyouPage = document.querySelector("section.rate-me-page.hidden");

buttonTag.addEventListener("click", () => {
	frontPage.classList.toggle("hidden")
	thankyouPage.style.display = "flex"
});
