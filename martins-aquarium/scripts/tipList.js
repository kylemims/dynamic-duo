import { database } from './aquariumData.js';
export const tipList = () => {

    let tipHTML = `<ul class="tips">`

    for (const tip of database.tips) {
        tipHTML += `
        <li class="tip">
            <strong>${tip.topic}:</strong> ${tip.text}
        </li>`
    }
            
   tipHTML += `</ul>`

   return tipHTML
}


