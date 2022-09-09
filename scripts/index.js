//DOM get all thing will need
const nationality = document.querySelector("#nationality");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const img = document.querySelector("#img");
const btn = document.querySelector("#prediction");
const input_name = document.querySelector("#name");
// api
let gender_api_link = "https://api.genderize.io?name=";
let age_api_link = "https://api.agify.io/?name=";
let nationality_api_link = "https://api.nationalize.io/?name=";

// get dog img put it on screen if no error
fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
  if (res.ok) {
    res.json().then((data) => {
      img.style.background = `url(${data.message})`;
      img.style.backgroundRepeat = "no-repeat";
      img.style.backgroundSize = "cover";
      img.style.backgroundPosition = "center";
    });
  } else {
    console.log("some went wrong");
    img.style.backgroundColor = "red";
    img.textContent = "Some Went Wrong";
    img.style.textAlign = "center";
    img.style.color = "white";
  }
});

// btn click then start fetch api if  enter a value
btn.addEventListener("click", () => {
  value = input_name.value;
  // test if any thing enter
  if (value != "") {
    gender_api = gender_api_link + value;
    age_api = age_api_link + value;
    nationality_api = nationality_api_link + value;

    //gender api
    fetch(gender_api).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          if (data.gender != null) {
            gender.textContent = `Gender: ${data.gender}`;
          } else {
            gender.textContent = `No Data`;
          }
        });
      } else {
        gender.textContent = `some went wrong`;
      }
    });

    //nationality api
    fetch(nationality_api).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          country = data.country;
          if (country.length > 0) {
            if (country.length > 1) {
              nationality.textContent = `Nationality: ${country[0].country_id}, ${country[1].country_id} `;
            } else {
              nationality.textContent = `Nationality: ${country[0].country_id}`;
            }
          } else {
            nationality.textContent = `No Data`;
          }
        });
      } else {
        nationality.textContent = `some went wrong`;
      }
    });

    //age api
    fetch(age_api).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          if (data.age != null) {
            age.textContent = `Age: ${data.age}`;
          } else {
            age.textContent = `No Data`;
          }
        });
      } else {
        age.textContent = `some went wrong`;
      }
    });
  }
});
