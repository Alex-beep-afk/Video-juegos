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

    gamesData.forEach((game, index) => {
        const articles = document.querySelector(".container-articles");
        const bannerJV = document.querySelector(".container-img");
        if (index > 16) {
            const article = document.createElement("article");
            article.innerHTML = `
                <h3>${game.name}</h3>
                <img src="${game.background_image}" alt="Photo du jeu ${game.name}">
            `;
            article.classList.add("card");
            articles.appendChild(article);
        }
        if (index < 5) {
            const bannerItem = document.createElement("img");
            bannerItem.classList.add("banner-item");
            bannerItem.src = game.background_image;
            bannerItem.alt = game.name;
            bannerJV.appendChild(bannerItem);
        }

    });

});