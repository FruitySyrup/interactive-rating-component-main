let points = document.querySelector("ul.rate-me-numbers");
let btn = document.querySelector("button.submit");
let selectedNumber;
let previousSelectedNumber;

points.addEventListener("click", checked);
btn.addEventListener("click", submit);

function checked(e) {
    if (e.target.tagName === "LI") {
        if (previousSelectedNumber) {
            previousSelectedNumber.classList.remove("selected", "nohover");
        }
        e.target.classList.add("selected", "nohover");
        selectedNumber = e.target.dataset.rating;
        previousSelectedNumber = e.target;
    }
}

function submit(e) {
    if (selectedNumber) {
        document.getElementById(".selected-rating").innerText = selectedNumber;
        document.querySelectorAll(".rating").forEach((e) => {e.classList.toggle("hidden")});
    }
}
