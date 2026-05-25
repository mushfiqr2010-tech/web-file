const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

searchBtn.addEventListener("click", () => {
  if(searchInput.value){
    alert("Searching: " + searchInput.value);
  } else {
    alert("Please type something 🔍");
  }
});

document.getElementById("enterBtn").addEventListener("click", () => {
  alert("Welcome to ANGRY RAFA Universe 🔥");
});