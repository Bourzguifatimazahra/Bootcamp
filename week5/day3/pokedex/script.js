
// script.js

const nameElement = document.getElementById("pokemon-name");
const idElement = document.getElementById("pokemon-id");
const heightElement = document.getElementById("pokemon-height");
const weightElement = document.getElementById("pokemon-weight");
const typeElement = document.getElementById("pokemon-type");
const imageElement = document.getElementById("pokemon-image");
const loadingElement = document.getElementById("loading");
const searchInput = document.getElementById("search-input");
const sound = document.getElementById("poke-sound");

let currentPokemonId = localStorage.getItem("lastPokemonId") || 1;

const animateImage = () => {
  imageElement.classList.add("scale-up");
  setTimeout(() => {
    imageElement.classList.remove("scale-up");
  }, 300);
};

const fetchPokemon = async (idOrName) => {
  try {
    loadingElement.textContent = "Loading...";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    if (!response.ok) throw new Error("Not found");

    const data = await response.json();

    nameElement.textContent = data.name;
    idElement.textContent = data.id;
    heightElement.textContent = data.height;
    weightElement.textContent = data.weight;
    typeElement.textContent = data.types.map(t => t.type.name).join(", ");
    imageElement.src = data.sprites.front_default;

    currentPokemonId = data.id;
    localStorage.setItem("lastPokemonId", currentPokemonId);

    loadingElement.textContent = "";
    animateImage();
    sound.play();
  } catch (error) {
    loadingElement.textContent = "Oh no! That Pokémon isn’t available…";
    nameElement.textContent = "";
    idElement.textContent = "";
    heightElement.textContent = "";
    weightElement.textContent = "";
    typeElement.textContent = "";
    imageElement.src = "";
  }
};

document.getElementById("random-btn").addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  fetchPokemon(randomId);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPokemonId > 1) {
    fetchPokemon(currentPokemonId - 1);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  fetchPokemon(currentPokemonId + 1);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const value = searchInput.value.trim().toLowerCase();
    if (value) fetchPokemon(value);
  }
});

// Initial load
fetchPokemon(currentPokemonId);
