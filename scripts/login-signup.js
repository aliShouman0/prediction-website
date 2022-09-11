//DOM get all thing will need
const userName_sigup = document.querySelector("#userName-sigup");
const password_sigup = document.querySelector("#password-sigup");
const userName_login = document.querySelector("#userName-login");
const password_login = document.querySelector("#password-login");
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");

signup.addEventListener("click", (e) => {
  let userName = userName_sigup.value;
  let password = password_sigup.value;
  if (userName != "" && password != "") {
    let user = {
      userName: userName,
      password: password,
    };

    let user_json = JSON.stringify(user);
    localStorage.setItem("user", user_json);
    console.log("add done");
  } else {
    console.log("add not done");
  }

  e.preventDefault();
});

login.addEventListener("click", (e) => {
  let userName = userName_login.value;
  let password = password_login.value;
  if (userName != "" && password != "") {
    let data = localStorage.getItem("user");
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
  } else {
    console.log();
  }
  e.preventDefault();
});
