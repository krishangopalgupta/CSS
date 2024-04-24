const bars = document.querySelector(".bars");
const listItems = document.querySelector(".list-items");

bars.addEventListener("click", () => {
  bars.classList.toggle("navbar");
});

listItems.addEventListener("click",() => {
  listItems.classList.add("show");
  console.log(listItems);
})

// const navbarToggle = document.querySelector('.navbar-toggle');
// const mainMenu = document.querySelector('.main-menu');

// navbarToggle.addEventListener('click', () => {
//   navbarToggle.classList.toggle('show-menu');
//   mainMenu.classList.toggle('show-menu');
// });
