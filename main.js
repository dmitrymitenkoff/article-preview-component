const shareButton = document.querySelector(".share-button");

const change = function() {
    const socialBtns = document.querySelector(".buttons").classList.toggle("social");
    const spanText = document.querySelector(".share-text").classList.toggle("hide");
    const facebook = document.querySelector(".facebook").classList.toggle("hide");
    const twitter = document.querySelector(".twitter").classList.toggle("hide");
    const pintrest = document.querySelector(".pintrest").classList.toggle("hide");
}

shareButton.addEventListener("click", change);