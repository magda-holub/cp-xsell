const xsId = 25686;

fetch('/Services/RestService.svc/v3/pack?id=' + xsId, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	}
})
.then(function(response) { return response.json(); })
.then(function(result) {

	const resultData = result.data

	function makeInfobox(name, price, comparePrice, img, url) {
		var infobox = {
			name: name,
			price: price,
			compare_price: comparePrice,
			img: img, 
			url: url,
			cid: img
		}

		infobox.cid = infobox.cid.split('/').pop().replace('.jpg', '')

		console.log(infobox);
	}

	resultData.forEach(function (key) {

		makeInfobox(key.name, key.unitPriceWithVat, key.compare_price, key.img, key.url)

	})
})








const array = [];

function createInfobox() {

	//create element, inner html, append child to infobox - to celé do forEach někde nahoře (v resultData.forEach)

	const markerTemp = document.createElement('div');
	const cardTemp = document.createElement('div');
T
	const storage = {
		el: Element,
		marker: markerTemp,
		card: cardTemp
	};
	array.push(storage);


}; createInfobox();

console.log();