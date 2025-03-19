import { database } from './aquariumData.js';
export const fishList = () => {
   
    let fishHTML = `<div class="fishList">`
    
        for (const fish of database.fish) {
            fishHTML += `
            <div class="fish-card">
                <img src="${fish.image}">
                <p><strong>Name:</strong> ${fish.name}</p>
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.size} inches</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>`
        }
    
        fishHTML += `</div>`
        return fishHTML
    }

// Function to return fish / 3
export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

//  Function to return fish / 5
export const soldierFish = () => {
    const soldierFishArray = []

    for (const fish of database.fish) {
        if (fish.size % 5 === 0) {
            soldierFishArray.push(fish)
        }
    }

    return soldierFishArray;
}

//  Loser fish
export const regularFish = () => {
    const regularFishArray = []

    for (const fish of database.fish) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
            regularFishArray.push(fish)
        }
    }

    return regularFishArray
}