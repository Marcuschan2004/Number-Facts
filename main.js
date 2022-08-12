let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");

enter_btn.addEventListener("click", getFacts);

let facts = []
let timer = null

function getFacts() {
    if(timer != null)
        clearTimeout(timer)

    let input = document.querySelector(".input").value;
    let card_text = document.querySelector(".card-text");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5c66b16a91msh73202644311eb98p12909fjsnde305679b6a5',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        referrerPolicy: 'no-referrer'
    };

    fetch('https://numbersapi.p.rapidapi.com/' + input + '/trivia?fragment=true&notfound=floor&json=true', options)
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not OK');
            }
            return response.json();
          })
        .then((response) => {
            if(!facts.includes(response['text'])){
                card_text.insertAdjacentHTML('beforeend','<ul><li>' + input + ': ' + response['text'] + '</li></ul>')
                facts.push(response['text'])
            }
            else{
                timer = setTimeout(getFacts, 1000);
            }
        })
        .catch(err => console.error(err));
}

let copy_btn = document.querySelector(".copy-btn");
copy_btn.addEventListener("click",copyText)

function gen_text(facts_array) {
    let facts_string = ""
    for (let i = 0; i < facts_array.length; i++){
        if(i == facts_array.length-1){
            facts_string += facts_array[i]
        }
        else{
            facts_string += facts_array[i] + ", "
        }
    }
    return facts_string
}

function copyText() {
    if(timer != null)
        clearTimeout(timer)

    let card_text = document.querySelector(".card-text");
    card_text.innerHTML = ""
    console.log(gen_text(facts))
    navigator.clipboard.writeText(gen_text(facts)).then(() => {
        alert("Fact has been copied!");
    });
    facts = []
}

 
