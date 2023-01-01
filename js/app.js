let deleteIcon = document.querySelectorAll(".latest-tasks .item .icon");
let latestItem = document.querySelectorAll(".latest-tasks .item ");
// deleteIcon.addEventListener("click", (e) => {
//   console.log(e.target.parentNode.parentNode);
//   e.target.parentElement.parentElement.remove();
// });

deleteIcon.forEach((e) => {
  e.addEventListener("click", (ele) => {
    ele.target.parentElement.parentElement.remove();
  });
});
latestItem.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (ele.target === latestItem) {
      ele.target.classList.toggle("done");
    } else {
      ele.target.parentElement.parentElement.classList.toggle("done");
    }
  });
});
