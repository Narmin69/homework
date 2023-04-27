let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let checkbox = document.querySelector(".checkbox");
let checked = document.querySelector(".checked");
let radio = document.querySelector(".radio");
let submit = document.querySelector(".submit");
// submit.setAttribute("disabled","")
name.addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
name.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
surname.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});
surname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
password.addEventListener("focus", function (event) {
  event.target.value = "password";
});
checked.style.display = "none";
checkbox.addEventListener("focus", function () {
  checked.style.display = "block";
});
checkbox.addEventListener("blur", function () {
  checked.style.display = "none";
});
// radio.forEach((element) => {
//   element.addEventListener("click", function () {
//     alert("thanks");
//   });
// });
