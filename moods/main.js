const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

    for (const hour of hours) {
            if (hour < 7) {
            grumpyHours.push(hour)
            }
            else {happyHours.push(hour)

            }
    }
console.log(`
I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.
`)
