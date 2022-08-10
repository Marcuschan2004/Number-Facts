let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");

enter_btn.addEventListener("click", getFacts);

function getFacts() {
    let input = document.querySelector(".input").value;
    let card_title = document.querySelector(".card_title");
    let card_text = document.querySelector(".card-text");

    fetch('http://numbersapi.com/${input}')
    .then(response => response.text())
    .then((data) => {
        card_title.innerHTML = input;
    });
}
