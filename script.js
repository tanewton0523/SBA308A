document.getElementById("searchCharBtn").addEventListener("click", getCharData);
// document.getElementById("searchSpellBtn").addEventListener("click", getSpellData);
// document.getElementById("searchBookBtn").addEventListener("click", getBookData);
 


async function getCharData() {
    const characterName = document.getElementById("inputCharacter").value.trim();
    if (!characterName || characterName.length < 2) {
        document.getElementById("charResults").innerHTML = "Please enter at least 2 characters.";
        return;
    }

    try {
        const response = await fetch("https://harry-potter-api-en.onrender.com/characters");
        if (!response.ok) {
            throw new Error("Failed to fetch character data");
        }

        const data = await response.json();

        const filteredCharacters = data.filter(character =>
            character.character && character.character.toLowerCase().includes(characterName.toLowerCase())
        );

        displayCharacterData(filteredCharacters);
        
    } catch (error) {
        console.error("Error fetching character data:", error);
        document.getElementById("charResults").innerHTML =
            `Error: Unable to fetch data for "${characterName}". Please try again.`;
    }
}


function displayCharacterData(characters) {
    const resultsContainer = document.getElementById("charResults");
    if (!characters.length) {
        resultsContainer.innerHTML = "No characters with that name found. Please try a different name.";
        return;
    }
    resultsContainer.innerHTML = characters.map(character => `
        <div class="character-container">
            <h3>${character.character || "Unknown"}</h3>
            <h4>${character.nickname || "Unknown"}</h4>
            <p><strong>House:</strong> ${character.hogwartsHouse || "Unknown"}</p>
            <img src="${character.image}" alt="${character.character}" style="width:100px;height:auto;">
            <h5>${character.interpretedBy || "Unknown"}</h5>
        </div>
    `).join("");
}

