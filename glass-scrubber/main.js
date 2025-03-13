const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]
//console.log(dishes)[index number] 
/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/


//let index1 = dishes.indexOf("Water glass")
////let index2 = dishes.indexOf("Wine glass")
//let index3 = dishes.indexOf("Whiskey glass")
//console.log(index1, index2, index3)
//const glassOfWater = dishes

const glassWater = dishes[1]
const glassWine = dishes[4]
const glassWhiskey = dishes[9]

console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(glassWater)
console.log(glassWine)
console.log(glassWhiskey)



//const whiteColor = myFavoriteColors[4]
//console.log(whiteColor)