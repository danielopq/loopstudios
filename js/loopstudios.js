/**
 * @fileoverview Contains de main acctions do hide or display the main menu while the mobile version is running.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

/**
 * Displays the main menu (mobile version).
 */
const showMobileMenu = () => {
	document.getElementById("menu-mobile").style.display = "flex";
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
}

/**
 * Hide the main menu (mobile version).
 */
const hideMobileMenu = () => {
	document.getElementById("menu-mobile").style.display = "none";
	document.getElementsByTagName("html")[0].style.overflow = "auto";
}

(() => {
	document.getElementById("menu-hamburger").addEventListener('click', showMobileMenu, false);
	document.getElementById("close-icon").addEventListener('click', hideMobileMenu, false);
})()
