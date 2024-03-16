window.onload = start;

function start(){
	document.getElementById("menu-hamburger").addEventListener('click',showMobileMenu,false);
	document.getElementById("close-icon").addEventListener('click',hideMobileMenu,false);
}

function showMobileMenu(){
	document.getElementById("menu-mobile").style.display = "block";
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
}

function hideMobileMenu(){
	document.getElementById("menu-mobile").style.display = "none";
	document.getElementsByTagName("html")[0].style.overflow = "auto";
}