'use strict';

let dropdown = document.querySelectorAll('.dropdownListButton');

let dropdownLists = document.querySelectorAll('.dropdownList');

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('active');
  });
}

let closeMenuBtn = document.querySelector('#closeMenu');

let openMenuBtn = document.querySelector('#openMenu');

let sideMenu = document.querySelector('.sideMenu');

let overlay = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', function () {
  sideMenu.classList.toggle('opened');
  overlay.classList.toggle('overlayShowed');
});

closeMenuBtn.addEventListener('click', function () {
  sideMenu.classList.toggle('opened');
  overlay.classList.toggle('overlayShowed');

  for (let i = 0; i < dropdownLists.length; i++) {
    if (dropdownLists[i].classList.contains('active')) {
      dropdownLists[i].classList.toggle('active');
    }
  }
});
