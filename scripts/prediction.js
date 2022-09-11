//DOM get all thing will need
const nationality = document.querySelector("#nationality");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const img = document.querySelector("#img");
const btn = document.querySelector("#prediction");
const input_name = document.querySelector("#name");
const bored_btn = document.querySelector("#bored");
const bored_text = document.querySelector("#bored_text");
const ip = document.querySelector("#ip");

// api
const gender_api_link = "https://api.genderize.io?name=";
const age_api_link = "https://api.agify.io/?name=";
const nationality_api_link = "https://api.nationalize.io/?name=";
const bored_api = "https://www.boredapi.com/api/activity";
const ip_api = "https://api.ipify.org/?format=json";

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
    img.style.backgroundColor = "red";
    img.textContent = "Some Went Wrong";
    img.style.textAlign = "center";
    img.style.color = "white";
  }
});

// btn click then start fetch api if  enter a value
btn.addEventListener("click", () => {
  let value = input_name.value;
  // test if any thing enter
  if (value != "") {
    let gender_api = gender_api_link + value;
    let age_api = age_api_link + value;
    let nationality_api = nationality_api_link + value;

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
          let country = data.country;
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

// bored_api
bored_btn.addEventListener("click", () => {
  axios.get(bored_api).then((res) => {
    if (res.status == 200) {
      bored_text.textContent = res.data.activity;
    } else {
      bored_text.textContent = "some went wrong";
    }
  });
  bored_text.classList.remove("d-none");
  setTimeout(removeBored, 8000);
});

// ip_api
axios.get(ip_api).then((res) => {
  if (res.status == 200) {
    ip.textContent = `IP address= ${res.data.ip}`;
  } else {
    ip.textContent = "some went wrong";
  }
});

// remove Bored text after time
function removeBored() {
  bored_text.classList.add("d-none");
  bored_text.textContent = "Wait..";
}
