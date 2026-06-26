const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

class Forecast {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

let rainy = new Forecast("9999-99-99", "", "");

for (let i = 1; i <= n; i++) {
    const [date, day, weather] = input[i].split(' ');
    const f = new Forecast(date, day, weather);

    if (f.weather === "Rain" && f.date < rainy.date) {
        rainy = f;
    }
}

console.log(rainy.date, rainy.day, rainy.weather);