document.getElementById("searchCharBtn").addEventListener("click", getCharData);
document.getElementById("searchSpellBtn").addEventListener("click", getSpellData);
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

// Spells
async function getSpellData() {
    const spellName = document.getElementById("inputSpell").value.trim();
    if (!spellName || spellName.length < 2) {
        document.getElementById("spellResults").innerHTML = "Please enter at least 2 characters.";
        return;
    }

    try {
        const response = await fetch("https://harry-potter-api-en.onrender.com/spells");
        if (!response.ok) {
            throw new Error("Failed to fetch spell data");
        }

        const data = await response.json();

        const filteredSpells = data.filter(spells =>
            spells.spell && spells.spell.toLowerCase().includes(spellName.toLowerCase())
        );

        displaySpellData(filteredSpells);
        
    } catch (error) {
        console.error("Error fetching spell data:", error);
        document.getElementById("spellResults").innerHTML =
            `Error: Unable to fetch data for "${spellName}". Please try again.`;
    }
}

function displaySpellData(spells) {
    const resultsContainer = document.getElementById("spellResults");
    if (!spells.length) {
        resultsContainer.innerHTML = "No spells with that name found. Please try a different name.";
        return;
    }
    resultsContainer.innerHTML = spells.map(spell => `
        <div class="spell-container">
            <h3>${spell.spell || "Unknown"}</h3>
            <h4>${spell.use || "Unknown"}</h4>
        </div>
    `).join("");
}

// Books
// async function getCharData() {
//     const characterName = document.getElementById("inputCharacter").value.trim();
//     if (!characterName || characterName.length < 2) {
//         document.getElementById("charResults").innerHTML = "Please enter at least 2 characters.";
//         return;
//     }

//     try {
//         const response = await fetch("https://harry-potter-api-en.onrender.com/characters");
//         if (!response.ok) {
//             throw new Error("Failed to fetch character data");
//         }

//         const data = await response.json();

//         const filteredCharacters = data.filter(character =>
//             character.character && character.character.toLowerCase().includes(characterName.toLowerCase())
//         );

//         displayCharacterData(filteredCharacters);
        
//     } catch (error) {
//         console.error("Error fetching character data:", error);
//         document.getElementById("charResults").innerHTML =
//             `Error: Unable to fetch data for "${characterName}". Please try again.`;
//     }
// }

// function displayCharacterData(characters) {
//     const resultsContainer = document.getElementById("charResults");
//     if (!characters.length) {
//         resultsContainer.innerHTML = "No characters with that name found. Please try a different name.";
//         return;
//     }
//     resultsContainer.innerHTML = characters.map(character => `
//         <div class="character-container">
//             <h3>${character.character || "Unknown"}</h3>
//             <h4>${character.nickname || "Unknown"}</h4>
//             <p><strong>House:</strong> ${character.hogwartsHouse || "Unknown"}</p>
//             <img src="${character.image}" alt="${character.character}" style="width:100px;height:auto;">
//             <h5>${character.interpretedBy || "Unknown"}</h5>
//         </div>
//     `).join("");
// }