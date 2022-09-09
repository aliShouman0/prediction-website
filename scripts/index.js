const nationality = document.querySelector("#nationality");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const img = document.querySelector("#img");

// https://api.genderize.io?name=rio
// https://api.agify.io/?name=nour
// https://api.nationalize.io/?name=mohamad 

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
