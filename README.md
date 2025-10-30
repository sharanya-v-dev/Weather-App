## 🌦️ Weather Now

A simple, responsive React weather application built using the Open-Meteo API.
It lets users search for any city and instantly see the current temperature, wind speed, and weather code, all in a clean card UI.

## 🚀 Features

🔍 Search weather by city name

🌤️ Displays current temperature, wind speed, and conditions

⚠️ Handles errors (e.g., invalid city or network failure)

💅 Modern UI with cloudy background and gradient card

📱 Fully responsive design for desktop and mobile

## 🛠️ Tech Stack

React (create-react-app)

CSS for styling (custom + gradient background)

Open-Meteo API for real-time weather data

Weather API

Geocoding API

## FOLDER STRUCTRE
weather-now/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   └── WeatherCard.css
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
├── Screenshot / images.jpg
└── README.md

## 🧾 API Example

Example request:

https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true


Example response:

{
  "current_weather": {
    "temperature": 28.4,
    "windspeed": 12.3,
    "weathercode": 2
  }
}

## Screenshot
outlook.jpg  --> The output of the code.
Specific-loc.jpg  ---> weather results based on specific location search.

## 💡 Future Enhancements

🌞 Dynamic background (changes with weather type)

📍 Auto-detect current location

📊 5-day forecast chart

🗺️ Map view with multiple cities

