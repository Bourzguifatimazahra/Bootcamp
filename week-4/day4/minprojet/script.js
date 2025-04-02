// Tableau pour stocker les citations
let quotes = [
    { id: 0, author: "Albert Einstein", quote: "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", likes: 0 },
    { id: 1, author: "Confucius", quote: "Celui qui pose une question est un imbécile pendant cinq minutes, celui qui ne pose pas de question reste un imbécile pour toujours.", likes: 0 },
    { id: 2, author: "Mahatma Gandhi", quote: "Soyez le changement que vous voulez voir dans le monde.", likes: 0 },
];

// Variables pour garder la trace de la citation actuelle
let currentQuoteIndex = -1;

// Fonction pour afficher une citation aléatoire
function generateQuote() {
    let randomIndex;
    
    // Générer un index aléatoire qui n'est pas la même citation qu'auparavant
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex);

    currentQuoteIndex = randomIndex;

    const quote = quotes[randomIndex];

    // Mettre à jour la citation et l'auteur dans le DOM
    document.getElementById("quoteText").innerText = `"${quote.quote}"`;
    document.getElementById("quoteAuthor").innerText = `- ${quote.author}`;
    document.getElementById("quoteLikes").innerText = `J'aime : ${quote.likes}`;
}

// Fonction pour ajouter une nouvelle citation
function addQuote() {
    const newQuote = document.getElementById("newQuote").value;
    const newAuthor = document.getElementById("newAuthor").value;

    // Ajouter la nouvelle citation au tableau
    const newQuoteObject = {
        id: quotes.length,
        author: newAuthor,
        quote: newQuote,
        likes: 0,
    };

    quotes.push(newQuoteObject);

    // Réinitialiser les champs du formulaire
    document.getElementById("newQuote").value = '';
    document.getElementById("newAuthor").value = '';

    alert("Citation ajoutée !");
}

// Fonction pour aimer une citation
function likeQuote() {
    if (currentQuoteIndex !== -1) {
        quotes[currentQuoteIndex].likes++;
        document.getElementById("quoteLikes").innerText = `J'aime : ${quotes[currentQuoteIndex].likes}`;
    }
}

// Fonction pour compter les caractères (espaces inclus ou non)
function countCharacters(inclusive) {
    const quoteText = quotes[currentQuoteIndex].quote;

    if (inclusive) {
        document.getElementById("stats").innerText = `Nombre de caractères (espaces inclus) : ${quoteText.length}`;
    } else {
        // Retirer les espaces avant de compter
        const quoteWithoutSpaces = quoteText.replace(/\s/g, '');
        document.getElementById("stats").innerText = `Nombre de caractères (sans espaces) : ${quoteWithoutSpaces.length}`;
    }
}

// Fonction pour compter le nombre de mots dans la citation
function countWords() {
    const quoteText = quotes[currentQuoteIndex].quote;
    const wordCount = quoteText.split(/\s+/).length;
    document.getElementById("stats").innerText = `Nombre de mots : ${wordCount}`;
}

// Fonction pour filtrer les citations par auteur
function filterQuotes() {
    const authorFilter = document.getElementById("authorFilter").value.toLowerCase();

    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorFilter));

    if (filteredQuotes.length > 0) {
        // Afficher la première citation filtrée
        const quote = filteredQuotes[0];
        document.getElementById("quoteText").innerText = `"${quote.quote}"`;
        document.getElementById("quoteAuthor").innerText = `- ${quote.author}`;
        document.getElementById("quoteLikes").innerText = `J'aime : ${quote.likes}`;
        
        // Mettre à jour l'index
        currentQuoteIndex = quotes.indexOf(quote);
    } else {
        alert("Aucune citation trouvée pour cet auteur.");
    }
}

// Fonction pour afficher la citation précédente
function previousQuote() {
    if (currentQuoteIndex > 0) {
        currentQuoteIndex--;
        const quote = quotes[currentQuoteIndex];
        document.getElementById("quoteText").innerText = `"${quote.quote}"`;
        document.getElementById("quoteAuthor").innerText = `- ${quote.author}`;
        document.getElementById("quoteLikes").innerText = `J'aime : ${quote.likes}`;
    }
}

// Fonction pour afficher la citation suivante
function nextQuote() {
    if (currentQuoteIndex < quotes.length - 1) {
        currentQuoteIndex++;
        const quote = quotes[currentQuoteIndex];
        document.getElementById("quoteText").innerText = `"${quote.quote}"`;
        document.getElementById("quoteAuthor").innerText = `- ${quote.author}`;
        document.getElementById("quoteLikes").innerText = `J'aime : ${quote.likes}`;
    }
}
