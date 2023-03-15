import "./styles.css";

// document.getElementById("app").innerHTML = ``;
var buttons = document.getElementsByClassName("button");
var text = document.getElementById("display");
var history = document.getElementById("history");

var op1 = null;
var op2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (value === "45") {
      text.innerText = " ";
      op1 = null;
      op2 = null;
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      operator = value;
      console.log(operator);
      op1 += parseFloat(text.innerText);

      if (isNaN(op1)) {
        return;
      } else {
        text.innerText = " ";
        history.innerText = op1;
      }
    } else if (value === "46") {
      op1 = parseFloat(text.innerText);
      if (op1 > 0) {
        op1 *= -1;
        console.log(op1);

        if (isNaN(op1)) {
          return;
        } else {
          text.innerText = " ";
          history.innerText = op1;
        }
      }
    } else if (value === "=") {
      op2 = parseFloat(text.innerText);

      if (isNaN(op2)) {
        return;
      } else {
        history.innerText = "";
        console.log(operator);
        text.innerText = eval(op1 + operator + op2);
      }
    } else {
      text.innerText += value;
    }
  });
}
