//DOM get all thing will need
const userName_sigup = document.querySelector("#userName-sigup");
const password_sigup = document.querySelector("#password-sigup");
const userName_login = document.querySelector("#userName-login");
const password_login = document.querySelector("#password-login");
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const pop_Up = document.querySelector("#popUp");

// add user signup
signup.addEventListener("click", (e) => {
  let userName = userName_sigup.value;
  let password = password_sigup.value;

  // entered value not nulls
  if (userName != "" && password != "") {
    let data = JSON.parse(localStorage.getItem("users"));
    let addUser = {
      userName: userName,
      password: password,
    };
    // add user or append if it exist
    if (data == null) data = [];
    data.push(addUser);
    localStorage.setItem("users", JSON.stringify(data));
    popUp("Add Done");
  } else {
    popUp("Error Enter !!");
  }

  e.preventDefault();
});

// login
login.addEventListener("click", (e) => {
  let userName = userName_login.value;
  let password = password_login.value;
  let login = false;

  // entered value not null
  if (userName != "" && password != "") {
    let data = JSON.parse(localStorage.getItem("users"));
    let user;
    // search for user
    for (let i = 0; i < data.length; i++) {
      user = data[i];
      if (user["userName"] == userName && user["password"] == password) {
        console.log("loign done");
        window.location.replace("prediction.html");
        login = true;
        break;
      }
    }
    if (!login) {
      popUp("Error Enter !!");
    }
  } else {
    popUp("Error Enter !!");
  }
  e.preventDefault();
});

function removeMessage() {
  pop_Up.classList.add("d-none");
}

function popUp(message) {
  userName_sigup.value = "";
  password_sigup.value = "";
  userName_login.value = "";
  password_login.value = "";
  pop_Up.textContent = message;
  pop_Up.classList.remove("d-none");
  setTimeout(removeMessage, 3000);
}
