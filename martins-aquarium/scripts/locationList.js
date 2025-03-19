import { database } from './aquariumData.js';
export const locationList = () => {

    let locationHTML = `<article class="locations">`

    for (const location of database.locations) {
        locationHTML += `
        <section class="location">
            <h3>${location.name}, ${location.country}</h3>
            <p>${location.description}</p>
        </section>`
    }

    locationHTML += `</article>`
    
    return locationHTML
}