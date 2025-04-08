function getStarshipData() {
    return fetch("https://www.swapi.tech/api/starships/9/")
      .catch(error => {
        console.error("Erreur attrapée :", error); 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        return response.json();
      })
      .then(objectStarWars => {
        console.log(objectStarWars.result);
      });
  }
  
  getStarshipData();
  