const APIKey = "435cf61d3d054c36bb31367f3a5ab07a";

const apiUrl = `https://api.rawg.io/api/games?key=${APIKey}`;

let gamesData = [];

const gameList = document.getElementById("game-list");



async function recupGames() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Erreur :", error);
    }
    
}

recupGames().then(data => {
    gamesData = data.results;
    console.log(gamesData);
    gamesData.forEach(game => {
        const article = document.createElement("article");
        article.innerHTML = `<h3>${game.name}</h3><img src="${game.background_image}" alt="Photo du jeu ${game.name}"><p>Note Metacritique: ${game.metacritic}</p><ul class="tags"></ul>`;
        const tagsList = article.querySelector(".tags");

        game.tags.forEach((tag, index) => {
            if (index < 3) {
                const li = document.createElement("li");
                li.textContent = tag.name;
                tagsList.appendChild(li);
            }
        });
        article.classList.add("card");
        gameList.appendChild(article);
    });
});
