enter_btn = document.querySelector(".btn");
card = document.querySelector(".card");

enter_btn.addEventListener("click", getFacts);

getFacts() {
  input = document.querySelector(".input").value;
  card_title = document.querySelector(".card_title");
 card_text = document.querySelector(".card-text");

  (input !=="") {
        card.classList.remove("d-none");

        fetch('http://numbersapi.com/${input}')
    .then(response => response.text())
    .then((data) => {
        card_title.innerHTML = input;
        card_text.innerHTML = data;
    })
    .catch((err) => console.log(err));
    }
}

copy_btn = document.querySelector(".copy-btn");
copy_btn.addEventListener("click", () => {
    copyText();
})

 copyText() {
   textarea = document.createElement("textarea");
 card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Fact has been copied!");
}
