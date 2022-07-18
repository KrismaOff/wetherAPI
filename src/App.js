import './App.css';
import FORM from './components/form'
import INFO from './components/info'
import WEATHER from './components/weather'
import { useState, useEffect } from 'react';

const API_KEY = "2db5186a90af8134ed6537d0d56f4275";

function App() {

  const [addedWeather, setAddedWeather] = useState({})

  const gettingWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();

      setAddedWeather({
        ...addedWeather,
        [city]: {
          "city": data.name,
          "country": data.sys.country,
          "temp": data.main.temp,
        }
      })
    }
  }
  useEffect(() => {
    
  }, [])
  

  return (
    <div className="App">
      <INFO />
      <FORM weatherScript={gettingWeather} />
      <WEATHER
        addedWeather={addedWeather}
      />

    </div>
  );
}

export default App;
