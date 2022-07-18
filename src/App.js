// import { createStore } from "redux"
// import { Provider } from "react-redux"
// import { store } from './store'

import './App.css';
import FORM from './components/form'
import WEATHER from './components/weather'
import { useState, useEffect } from 'react';

const API_KEY = "2db5186a90af8134ed6537d0d56f4275";

function App() {

  const [addedWeather, setAddedWeather] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => gettingWeather([latitude, longitude]))
  }, [])

  const gettingWeather = async (e) => {
    if (Array.isArray(e)) {
      const api_url_cord = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e[0]}&lon=${e[1]}&appid=${API_KEY}`)
      const data = await api_url_cord.json();

      setAddedWeather({
        ...addedWeather,
        [data.name]: {
          "main": true,
          "city": data.name,
          "country": data.sys.country,
          "temp": data.main.temp,
        }
      })

    } else {
      e.preventDefault()
      const city = e.target.elements.city.value;

      if (city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();

        setAddedWeather({
          ...addedWeather,
          [city]: {
            "main": false,
            "city": data.name,
            "country": data.sys.country,
            "temp": data.main.temp,
          }
        })
      }
    }

  }
  const deleteCity = (e) => {
    let state = addedWeather
    delete state[e]
    setAddedWeather(state)
  }

  return (
    <div className="App">
      <FORM weatherScript={gettingWeather} />
      <WEATHER addedWeather={addedWeather} deleteCity={deleteCity} />
      <button onClick={() => console.log(addedWeather)}>123</button>
    </div>
  );
}

export default App;
