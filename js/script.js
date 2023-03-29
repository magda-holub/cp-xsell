var bgrImage = document.createElement('img')
var ovladaciPanel = document.querySelector('.ovladaci-panel')
var wrapper = document.querySelector('.xs__background__wrapper')

function setAttributes(element, attributes) {
	Object.keys(attributes).forEach(function(attr) {
		element.setAttribute(attr, attributes[attr]);
	});
}

var attributes = {
	src: ovladaciPanel.querySelector('.imgData').dataset.img,
	srcset: ovladaciPanel.querySelector('.imgData').dataset.img + ', ' + ovladaciPanel.querySelector('.imgData').dataset.imgretina + ' 2x',
	width: 1310,
	height: 872,
	class: 'xs__bgr'
}

setAttributes(bgrImage, attributes)

wrapper.prepend(bgrImage)




var markerData = ovladaciPanel.querySelectorAll('.markerData')
var markerWrapper = document.querySelector('.xs__markers')

markerData.forEach(function(marker) {

	var newMarker = document.createElement('div')

	var attributes2 = {
		class: 'xs__marker',
		style: 'top: ' + marker.dataset.top + '%; left: ' + marker.dataset.left + '%'
	}

	newMarker.dataset.code = marker.dataset.cid

	setAttributes(newMarker, attributes2)

	newMarker.innerHTML = '<span class="xs__marker--ring xs__marker--outer"></span><span class="xs__marker--ring xs__marker--mid"></span><span class="xs__marker--ring xs__marker--inner"></span>'

	markerWrapper.append(newMarker)

})

console.log(markerData.forEach(function(marker){console.log(marker.dataset.cid + ' ' + marker.dataset.left)}));












const xsMarkers = document.querySelectorAll('#xs-component .xs__marker'),
	xsCards = document.querySelectorAll('#xs-component .xs__card'),
	xsBgr = document.querySelector('#xs-component #xs__bgr'),
	xsComponent = document.querySelector('#xs-component'),
	xsScreenType = document.body.classList;

	console.log(xsMarkers);



function xsInfoboxPopup() {
	xsBgr.addEventListener('click', function () {
		xsCards.forEach(function (card) {
			card.classList.remove('active');
			}
		)
	})
	xsMarkers.forEach(function (marker) {
		marker.addEventListener('click', function () {

			xsCards.forEach(function (card) {
				card.classList.remove('active');
				if (card.dataset.code == marker.dataset.code) {
					card.classList.add('active');
				}
			})
			if (xsScreenType.contains('mobile')) {
				xsCards.forEach(function (card) {
					if (card.dataset.code == marker.dataset.code) {
						card.scrollIntoView({behavior: 'smooth',  block: 'end'});
					}
				})
			}
		})
	})
}; xsInfoboxPopup();

function xsCardPosition() {
	if (!xsScreenType.contains('mobile')) {
		xsMarkers.forEach(function(marker) {
			xsCards.forEach(function(card) {
				if(card.dataset.code == marker.dataset.code) {
					card.style.top = (parseFloat(marker.style.top) - 6) + '%';
					card.style.bottom = (parseFloat(marker.style.bottom) - 6) + '%';
					card.style.left = (parseFloat(marker.style.left) + 2) + '%';
					card.style.right = (parseFloat(marker.style.right) + 2) + '%';
				}
			})
		})
	}
}; xsCardPosition();