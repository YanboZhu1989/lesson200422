const menuToggle = document.querySelector(".toggle");
//寻找html里面class toggle
const showcase = document.querySelector(".showcase");
//寻找html里面的class showcase
//++先相加后使用

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
