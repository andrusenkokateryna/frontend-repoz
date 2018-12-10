
$(document).ready(function() {
		$('.service-slide').slick({
			arrows:false,
			dots:true,
			autoplay:false
		});
	});

$(document).ready(function() {
		$('.feedback').slick({
			arrows:true,
			dots:true,
			autoplay:false
		});
	});

var btn=document.querySelector('#show'),
	menuMob = document.querySelector('.menu-for-small'),
	close= document.querySelector('#close');

	btn.addEventListener('click', function(){
		menuMob.style.display='block';
	})

	close.addEventListener('click', function(){
		menuMob.style.display='none';
	})

	window.addEventListener('click', function(e){
		if(e.target==menuMob){
			menuMob.style.display='none';
		}
	})