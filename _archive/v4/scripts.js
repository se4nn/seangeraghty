instafetch.init({
  accessToken: '2050036497.1677ed0.fbbe8a0cdb8c4343a3220fce3e3fd172',
  target: 'instagram_feed',
  numOfPics: 3,
  caption: false
});

function openMenu() {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById("menu_button").classList.toggle("hide");
}
function closeMenu() {
  document.getElementById("menu").classList.toggle("hide");
  document.getElementById("menu_button").classList.toggle("show");
}