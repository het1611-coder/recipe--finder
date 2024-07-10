const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close");






  const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');




searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchRecipes();
})



async function searchRecipes() {
  const searchValue = searchInput.value.trim();
  const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
  const data = await response.json();
  displayRecipes(data.hits);
}

function displayRecipes(recipes) {
  let html = '';
  recipes.forEach((recipe) => {
      html += `
      <div>
          <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
          <h3>${recipe.recipe.label}</h3>
          <ul>
              ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
      </div> 
      `
  })
  resultsList.innerHTML = html;
}





















  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});