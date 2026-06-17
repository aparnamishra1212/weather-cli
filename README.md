# 🌥️ Weather Forecast CLI

## Overview

Weather Forecast CLI is a simple command-line application built using JavaScript and Node.js that fetches real-time weather information using WeatherAPI.

The project was created to practice:

- JavaScript Fundamentals
- API Integration
- JSON Parsing
- Async/Await
- Error Handling

---

## Features

- Search weather by city name
- Display temperature, humidity, and wind speed
- Real-time weather information
- Simple CLI interface
- Error handling for invalid inputs

---

## Technologies Used

- JavaScript
- Node.js
- WeatherAPI
- Readline Sync

---

## Application Flow

```text
User
  |
  | Enter City Name
  v
Weather CLI
  |
  | API Request
  v
WeatherAPI
  |
  | JSON Response
  v
Display Weather Information
```

---

## Project Structure

```text
weather-cli
│
├── weather.js
├── package.json
├── README.md
└── screenshots
    └── weather-output.png
```

---

## Installation

```bash
git clone https://github.com/aparnamishra1212/weather-cli.git

cd weather-cli

npm install

node weather.js
```

---

## Sample Output

```text
===== Weather CLI =====

Enter city name: Chennai

=================================
      WEATHER FORECAST
=================================
City        : Chennai
Country     : India
Temperature : 37.2°C
Condition   : Partly cloudy
Humidity    : 57%
Wind Speed  : 16.6 km/h
=================================
```

---

## Understanding the API Response

```text
data
│
├── location
│   ├── name
│   └── country
│
└── current
    ├── temp_c
    ├── humidity
    └── wind_kph
```

Example:

```javascript
console.log(data.location.country);
```

Output:

```text
India
```

---

## Testing Scenarios

| Scenario | Expected Result |
|-----------|----------------|
| Valid city name | Weather displayed |
| Invalid city name | Error message |
| Empty input | Validation message |

---

## Future Improvements

- Search History
- Multi-City Weather Comparison
- API Test Automation
- Unit Testing

---

## Author

Aparna Mishra
Quality Assurance Analyst
