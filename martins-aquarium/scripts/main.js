import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// generate fish lists
const fishHTML = fishList()
document.getElementById("fishList").innerHTML = fishHTML

const tipHTML = tipList()
document.getElementById("tipList").innerHTML = tipHTML

const locationHTML = locationList()
document.getElementById("locationList").innerHTML = locationHTML


import { mostHolyFish, soldierFish, regularFish } from './fishList.js';

// target the fish container in the DOM
const fishContainer = document.getElementById("fishList");

//  put fish lists in order for marrrrrrtin
const holyFish = mostHolyFish();
const soldiers = soldierFish();
const regulars = regularFish();

//  convert to HTML
const holyFishHTML = generateFishHTML(holyFish);
const soldierFishHTML = generateFishHTML(soldiers);
const regularFishHTML = generateFishHTML(regulars);

//  interpolation? string
fishContainer.innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;

//  generate HTML for fish array
function generateFishHTML(fishArray) {
    let fishHTML = `<div class="fishList">`;

    for (const fish of fishArray) {
        fishHTML += `
        <div class="fish-card">
            <img src="${fish.image}">
            <p><strong>Name:</strong> ${fish.name}</p>
            <p><strong>Species:</strong> ${fish.species}</p>
            <p><strong>Size:</strong> ${fish.size} inches</p>
            <p><strong>Location:</strong> ${fish.location}</p>
            <p><strong>Diet:</strong> ${fish.diet}</p>
        </div>`;
    }

    fishHTML += `</div>`;
    return fishHTML;
}