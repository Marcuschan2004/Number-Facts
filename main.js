const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "5c66b16a91msh73202644311eb98p12909fjsnde305679b6a5",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
