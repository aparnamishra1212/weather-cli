const axios = require("axios");
const readline = require("readline-sync");

const API_KEY = "74a95936cb3e4cd0b4a92719261706";

async function getWeather(city) {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

        const response = await axios.get(url);

        const weather = response.data;

        console.log("\n=================================");
        console.log("      WEATHER FORECAST");
        console.log("=================================");
        console.log(`City        : ${weather.location.name}`);
        console.log(`Country     : ${weather.location.country}`);
        console.log(`Temperature : ${weather.current.temp_c}°C`);
        console.log(`Condition   : ${weather.current.condition.text}`);
        console.log(`Humidity    : ${weather.current.humidity}%`);
        console.log(`Wind Speed  : ${weather.current.wind_kph} km/h`);
        console.log("=================================\n");

    } catch (error) {
        console.log("\n❌ Unable to fetch weather data.");
        console.log("Please enter a valid city.\n");
    }
}

async function main() {

    console.log("===== Weather CLI =====");

    const city = readline.question("Enter city name: ");

    if (!city.trim()) {
        console.log("❌ City cannot be empty.");
        return;
    }

    await getWeather(city);
}

main();