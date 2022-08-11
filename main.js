let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");

enter_btn.addEventListener("click", getFacts);

function getFacts() {
    let input = document.querySelector(".input").value;
    let card_title = document.querySelector(".card_title");
    let card_text = document.querySelector(".card-text");

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c66b16a91msh73202644311eb98p12909fjsnde305679b6a5',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch('https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
        card_title.innerHTML = input;
        card_text.innerHTML = data;
    })
    .catch((err) => console.log(err));
    }
}

let copy_btn = document.querySelector(".copy-btn");
copy_btn.addEventListener("click", () => {
    copyText();
})

function copyText() {
    const textarea = document.createElement("textarea");
    let card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Fact has been copied!");
}
