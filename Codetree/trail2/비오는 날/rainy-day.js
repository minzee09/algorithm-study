const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.
class Forecast{
    constructor(date, day, weather){
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const forecast = [];

for(let f of forecasts){
   const [date, day, weather] = f;
   forecast.push(new Forecast(date,day,weather));
}

const rainy = {
    weather:'',
    day:'',
    date:'9999-99-99'
}

for(let f of forecast){
    const [r_year, r_mon, r_day] = rainy.date.split('-');
    const [year,mon,day] = f.date.split('-');
    let needChange = false;

    if(f.weather === 'Rain'){
        if(r_year > year){
            needChange = true;
        } else if (r_year === year){
            if(r_mon > mon){
                needChange = true;
            } else if (r_mon === mon){
                if(r_day > day) needChange = true;
            }
        }
    }

    if(needChange){
        rainy.date = f.date;
        rainy.day = f.day;
        rainy.weather = f.weather;
    }
}

console.log(rainy.date, rainy.day, rainy.weather);
