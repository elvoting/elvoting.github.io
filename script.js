
window.addEventListener('scroll', (e) => {  
	let body = document.body,
    	html = document.documentElement;
	let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) - document.querySelector(".footer-wrapper").clientHeight;

	let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	
	if(scrollTop > document.querySelector(".paralax").clientHeight && html.clientWidth > 500) {
		document.querySelector('nav').style.position = 'fixed';
	} else {
		document.querySelector('nav').style.position = 'static';
	}
	//console.log(scrollTop, height, scrollTop/height)
	document.querySelector("#status").style.width = ((scrollTop-document.querySelector(".paralax").clientHeight)/(height-document.querySelector(".paralax").clientHeight))*100 + "%";
})