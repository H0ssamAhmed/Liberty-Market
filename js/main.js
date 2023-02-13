let ul = document.querySelector(".links .info");
let bars = document.querySelector(".toggle");
let xmark = document.querySelector(".xmark");

bars.addEventListener("click", () => {
  ul.classList.toggle("flex");
  if (ul.classList.contains("flex")) {
    bars.style.display = "none";
    xmark.style.display = "block";
    ul.style.display = "flex";
  }
});
xmark.addEventListener("click", () => {
  bars.style.display = "block";
  xmark.style.display = "none";
  ul.classList = "ul";
  ul.style.display = "none";
  ul.style.cssText = `z-index:1;`;
  bars.style.cssText = `
                  @media (max-width:767px) {
                    ${bars}:{display:none;}}`;
});
//-------------------------------------------------
//---Items Currently In The Market at HOME PAGE----
let filter = document.querySelectorAll(".gallary .container .head ul li");
filter.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
      e.target.classList.add("active");
    });
  });
});

//-------------------------------------------------
