const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c66b16a91msh73202644311eb98p12909fjsnde305679b6a5',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch('https://numbersapi.p.rapidapi.com/42/trivia?fragment=true&notfound=floor&json=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	
