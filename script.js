var field = "";
var input = document.getElementById("inp");
let theme = "light";
function addToField(something) {
  field += String(something);
  input.value = field;
}

function equalField() {
  try {
    if (input.value != "") {
      input.value = eval(String(field));
      field = input.value;
    } else {
      input.value = "Incorrect!";
      field = "";
    }
  } catch (error) {
    input.value = "Incorrect!";
  }
}

function backSpace() {
  field = field.slice(0, field.length - 1);
  input.value = field;
}

function clearField() {
  field = "";
  input.value = field;
}
function changeTheme() {
  if (theme === "light") {
    document.documentElement.style.setProperty("--bc-color", "#191919");
    document.documentElement.style.setProperty("--button-color", "#303030");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--div-color", "#242424");
    let x = document.querySelectorAll("button");
    for (let i = 0; i < x.length; i++) {
      document.querySelectorAll("button")[i].style.boxShadow =
        "0px 0px 0px 0px";
    }
    theme = "dark";
  } else if (theme === "dark") {
    document.documentElement.style.setProperty("--bc-color", "white");
    document.documentElement.style.setProperty("--button-color", "#eeeeee");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty(
      "--div-color",
      "rgb(245, 252, 255)"
    );
    theme = "light";
    let x = document.querySelectorAll("button");
    for (let i = 0; i < x.length; i++) {
      document.querySelectorAll("button")[i].style.boxShadow =
        "0px 0px 10px #e8e8e8";
    }
  }
}
