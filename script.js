//================NAV BUTTONS CLICK ( BURGER )=============================//
const burgerBtn = document.querySelector(".burgerBtn");
const burgerToggle = document.querySelector(".burgerToggle");

let bool = false;
burgerToggle.style.display = "none";

burgerBtn.addEventListener("click", () => {
  if (bool == true) {
    burgerToggle.style.display = "flex";
    burgerToggle.style.animation = "toggleDown 0.5s ease-out";
    burgerBtn.style.background = "rgb(160, 18, 46)";
    bool = false;

    setTimeout(() => {
      burgerBtn.style.background = "crimson";
    }, 100);
  } else if (bool == false) {
    burgerToggle.style.display = "none";
    burgerBtn.style.background = "rgb(160, 18, 46)";
    bool = true;

    setTimeout(() => {
      burgerBtn.style.background = "crimson";
    }, 100);
  }
});

//================NAV BUTTONS CLICK=============================//
const navBtn = document.querySelectorAll(".item");
const arrayOfNavBtn = [];
navBtn.forEach((element) => {
  arrayOfNavBtn.push(element);
});

let bool2 = false;

for (let i = 0; i < arrayOfNavBtn.length; i++) {
  arrayOfNavBtn[i].addEventListener("click", () => {
    if (bool2 == true) {
      arrayOfNavBtn[i].style.background = "rgb(160, 18, 46)";
      setTimeout(() => {
        bool2 = false;
        arrayOfNavBtn[i].style.background = "crimson";
      }, 100);
    } else if (bool2 == false) {
      arrayOfNavBtn[i].style.background = "rgb(160, 18, 46)";
      bool2 = true;

      setTimeout(() => {
        arrayOfNavBtn[i].style.background = "crimson";
      }, 100);
    }
  });
}
