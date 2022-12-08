const btn = document.querySelector(".switch");
const input = document.querySelector(".input");
btn.addEventListener("click", function (event) {
  btn.classList.toggle("showPw");
  if (btn.classList.value.includes("show")) {
    btn.textContent = "Hide Password";
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
});
