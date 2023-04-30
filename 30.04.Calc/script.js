let value1 = document.querySelector(".value1");
let value2 = document.querySelector(".value2");
let result = document.querySelector(".result");
let addition = document.querySelector(".Addition");
let substract = document.querySelector(".Substract");
let multiply = document.querySelector(".Multiply");
let division = document.querySelector(".Division");
let reset = document.querySelector(".Reset");
let bool = false;
addition.addEventListener("click", function () {
  if (value1.value == "" || value2.value== "") {
    alert("Please, write addition,substract,multiply,division ");
  } else {
    let sum = +value1.value + +value2.value;
    result.innerText = sum;
  }
});
substract.addEventListener("click", function () {
    if (value1.value == "" || value2.value == "") {
      alert("Please, write addition,substract,multiply,division");
    } else {
      let substract = +value1.value - +value2.value;
      result.innerText = substract;
    }
  });
  multiply.addEventListener("click", function () {
    if (value1.value == "" || value2.value == "") {
      alert("Please, write addition,substract,multiply,division");
    } else {
      let multiply = +value1.value * +value2.value;
      result.innerText = multiply;
    }
  });
  division.addEventListener("click", function () {
    if (value1.value == "" || value2.value == "") {
      alert("Please, write addition,substract,multiply,division");
    } else {
      let division = +value1.value / +value2.value;
      result.innerText = division;
    }
  });
  reset.addEventListener("click", function () {
    value1.values = "";
    value2.value = "";
    result.innerText = 0;
  });