
const { trails } = require("./data.js")
const { rivers } = require("./data.js")
const { wildlife } = require("./data.js")

// Get the sum of all trail miles
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

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortyTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)
console.log("\n")
console.log("            T R A I L  D E T A I L S               ")
console.log("---------------------------------------------------")
trailDetails(trails)

console.log(`***************************************************`)
console.log(`*****              R I V E R S                *****`)
console.log(`***************************************************`)
const riverTotal = totalRiverMiles(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortRiver = shortyRiver(rivers)
console.log(`The shortest river tour is ${shortRiver} kilometers`)

const longRiver = longyRiver(rivers)
console.log(`The longest river tour is ${longRiver} kilometers`)
console.log("\n")

console.log("            R I V E R  D E T A I L S               ")
console.log("---------------------------------------------------")
riverDetails(rivers)

console.log(`***************************************************`)
console.log(`*****  T R A I L  T O U R  🥾💰  P R I C E S  *****`)
console.log(`***************************************************`)

console.log(`The least expensive trails are`)
const cheapTrail = leastExpensive(trails)
console.log("\n")
console.log(`The most expensive trails are`)
const notCheapTrail = mostExpensive(trails)
console.log("\n")
console.log(`***************************************************`)
console.log(`*****  R I V E R  T O U R  🛶💰  P R I C E S  *****`)
console.log(`***************************************************`)

console.log(`The least expensive river tours are`)
const cheapRiver = leastExpensiveRiver(rivers)
console.log("\n")
console.log(`The most expensive river tours are`)
const notCheapRiver = mostExpensiveRiver(rivers)
