const togglerbg = document.getElementById("toggler");
const toggler = document.getElementById("toggler-circle");
const body = document.body;

togglerbg.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    toggler.style.transform = "translateX(23px)";
  } else {
    body.classList.replace("light", "dark");
    toggler.style.transform = "translateX(0)";
  }
});

/* Mosue Over the toggler event */
togglerbg.addEventListener("mouseenter", () => {
  if (body.classList.contains("dark")) {
    toggler.style.backgroundColor = "hsl(230, 0%, 23%)";
  } else {
    toggler.style.background = "hsl(0, 0%, 100%)";
    togglerbg.style.backgroundImage =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  }
});

/* Mouse out from toggler event */
togglerbg.addEventListener("mouseleave", () => {
  if (body.classList.contains("dark")) {
    toggler.style.backgroundColor = "hsl(230, 17%, 14%)";
  } else {
    toggler.style.background = "hsl(0, 0%, 100%)";
    togglerbg.style.backgroundImage = "none";
  }
});


/* Mouse Over Header Card Section Hover */
function hoverIn(e) {
  const hover = document.getElementById("hover").children;

  for (let i = 0; i < hover.length; i++) {
    if (body.classList.contains("dark")) {
      hover[i].classList.add("dark-hover");
      hover[i].classList.remove("light-hover");
    } else {
      hover[i].classList.add("light-hover");
      hover[i].classList.remove("dark-hover");
    }
  }
}

/* Mouse out from  Header Card Section Hover */
function hoverOut(e) {
  const hover = document.getElementById("hover").children;

  for (let i = 0; i < hover.length; i++) {
    if (body.classList.contains("dark")) {
      hover[i].classList.remove("dark-hover");
    } else {
      hover[i].classList.remove("light-hover");
    }
  }
}

