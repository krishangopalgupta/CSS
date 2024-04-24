const bars = document.querySelector(".bars");
const listItems = document.querySelector(".list-items");
const items = document.querySelectorAll(".list-items a");
bars.addEventListener("click", () => {
  bars.classList.toggle("rotate-bars");
  listItems.classList.toggle("show-items");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.classList.remove("show-items");
    bars.classList.toggle("rotate-bars");
    // console.log(bars.classList.toggle("rotate-bars"));
  });
});
