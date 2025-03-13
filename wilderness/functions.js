const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total = trail.length
    }

    return total
}

// Get the shortest of all trails
const shortyTrail = (trailArray) => {
    let shortest = trailArray[0].length
    for (const trail of trailArray) {
        if (trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if (trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}
// NEW RIVER LENGTH FUNCTIONS


const totalRiverMiles = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total = river.length
    }

    return total
}

// Get the shortest of all trails
const shortyRiver = (riverArray) => {
    let shortest = riverArray[0].length
    for (const river of riverArray) {
        if (river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longyRiver = (allRivers) => {
    let longest = 0
    for (const river of allRivers) {
        if (river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

const leastExpensive = (trails) => {
    for (const trail of trails) {
        if (trail.price === "$") {
           console.log(trail.trailName)
         }
       }
    }

const mostExpensive = (trails) => {
    for (const trail of trails) {
        if (trail.price >= "$$$$") {
            console.log(trail.trailName)
            }
        }
    }

// River tour prices
const leastExpensiveRiver = (rivers) => {
    for (const river of rivers) {
        if (river.price === "$") {
           console.log(river.river)
         }
       }
    }

const mostExpensiveRiver = (rivers) => {
    for (const river of rivers) {
        if (river.price >= "$$$$") {
           console.log(river.river)
            }
        }
    }

const trailDetails = (trails) => {
    for (const trail of trails) {
    console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.`)
    console.log(`The highlighted plant for the trip is ${trail.plantHighlight}.\n`)            
        }
    }

    const riverDetails = (rivers) => {
        for (const river of rivers) {
        console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.`)
        console.log(`The unique fish for the trip is ${river.uniqueFish}.\n`)            
            }
        }

    module.exports = {
        totalTrailMiles, shortyTrail, longTrail, totalRiverMiles, shortyRiver, longyRiver, leastExpensive, mostExpensive, leastExpensiveRiver, mostExpensiveRiver, trailDetails, riverDetails
    }