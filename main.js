var allImages = document.getElementsByTagName('img');


// replaces all images on the current web page with bears
for (var i = 0; i < allImages.length; i++) {
	var imageHeight = allImages[i].clientHeight;
	var imageWidth = allImages[i].clientWidth;
	allImages[i].setAttribute('src', 'https://placebear.com/' + imageWidth + '/' + imageHeight);
}

/*
// click-to-replace
for (var i = 0; i < allImages.length; i++) {
	allImages[i].addEventListener('click', function() {
		var thisImageHeight = this.clientHeight;
		var thisImageWidth = this.clientWidth;
		var imageLink = "http://placekitten.com/" + thisImageWidth + "/" + thisImageHeight;
		this.setAttribute('src', imageLink);
	});
}*/

document.title = "Bears!";

/*
// testing
document.body.style.backgroundColor = "pink";
document.body.style = "transition: 5s; transform: rotate(5deg);";
document.body.style = "transition: 2s; transform: rotate(1080deg);";
document.body.style.fontSize = "1.2em";
*/