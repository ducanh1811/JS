var input = document.querySelectorAll("input");
var error = document.querySelectorAll(".error-input");
var btn = document.querySelector("button");
var isSuccess;

var message = [
  " is required",
  "Username is not valid",
  "Email is not valid",
  "Password is not valid",
  "Confirm password is not valid",
];

function removeSpace() {
  input.forEach(function (item) {
    item.value = item.value.trim();
  });
}

function checkUsername() {
  var reg = /^[a-zA-Z0-9_-]{4,16}$/;
  if (reg.test(input[0].value)) {
    error[0].innerText = "";
  } else {
    error[0].innerText = message[1];
  }
}

function checkEmail() {
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (reg.test(input[1].value)) {
    error[1].innerText = "";
  } else {
    error[1].innerText = message[2];
  }
}

function checkPassword() {
  var reg = /^[a-zA-Z0-9_-]{6,12}$/;
  if (reg.test(input[2].value)) {
    error[2].innerText = "";
  } else {
    error[2].innerText = message[3];
  }
}

function checkConfirmPassword() {
  if (input[2].value === input[3].value) {
    error[3].innerText = "";
  } else {
    error[3].innerText = message[4];
  }
}

function checkEmpty() {
  error.forEach(function (item, index) {
    item.innerText =
      input[index].value === ""
        ? input[index].placeholder + message[0]
        : item.innerText;
  });
}

function checkAll() {
  isSuccess = [true, true, true, true];
  removeSpace();
  checkUsername();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
  checkEmpty();
  error.forEach(function (item, index) {
    if (item.innerText !== "") {
      isSuccess[index] = false;
    }
  });
}

btn.addEventListener("click", function () {
  checkAll();
  isSuccess.forEach(function (item, index) {
    item ? input[index].style.borderBottomColor = 'var(--blue)' :
    input[index].style.borderBottomColor = 'var(--red)';
  })
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    checkAll();
    btn.click();
  }
});
