const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c66b16a91msh73202644311eb98p12909fjsnde305679b6a5',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
