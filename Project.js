const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('translate-x-0');
})

const dropdown = document.querySelector('.relative');
dropdown.addEventListener('mouseenter', function() {
this.querySelector('.hidden').classList.remove('hidden');
});
dropdown.addEventListener('mouseleave', function() {
this.querySelector('.hidden').classList.add('hidden');
});




document.addEventListener('click', function(event) {
  const isClickInside = dropdownToggle.contains(event.target) || dropdownMenu.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.style.display = 'none';
  }
});