const wines = [ "red", "white", "white", "white", "red", "white", "red" ]
const wineCellar = []
const wineRefrigerator = []

for (const wine of wines) {
	if (wine === "red") {
		wineCellar.push(wine)
	}
	else {
		wineRefrigerator.push(wine)
	}
}

console.log(`
Contents of wine cellar: ${wineCellar}
Contents of wine refrigerator: ${wineRefrigerator}
`)