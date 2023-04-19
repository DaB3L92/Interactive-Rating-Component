const cardReview = document.querySelector(".review")
const cardThankyou = document.querySelector(".thankyou")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rates")
const defaultActive = document.querySelector(".default-active");
const selected = document.querySelector(".selected");

rates.forEach((rate) => {
    rate.addEventListener("click", function () {
        rating.innerHTML = rate.innerHTML
        rates.forEach((ifSelected) => {
            ifSelected.classList.remove("selected");
        });
        rate.classList.add("selected");
        defaultActive.classList.remove("default-active");
    });
})

submitButton.addEventListener("click", () => {
    cardThankyou.classList.remove("hidden")
    cardReview.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    cardThankyou.classList.add("hidden")
    cardReview.style.display = "block"
})


/* rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
}) 
 */
