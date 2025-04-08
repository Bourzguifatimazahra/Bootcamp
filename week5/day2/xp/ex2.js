const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("10 gifs à partir de la position 2 :", data);
  })
  .catch(error => {
    console.error("Erreur attrapée :", error);
  });
