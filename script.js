console.log("Script loaded successfully!");

const learnMoreButton = document.querySelector(".learnMore button");

learnMoreButton.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/yelllow_yelllow_art/";
    learnMoreButton.textContent = "Redirecting to Instagram...";
});