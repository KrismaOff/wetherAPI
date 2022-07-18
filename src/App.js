import './App.css';
import FORM from './components/form'
import INFO from './components/info'
import WETHER from './components/wether'
import { useState } from 'react';

const API_KEY = "2db5186a90af8134ed6537d0d56f4275";

function App() {

  const [temp, setTemp] = useState(undefined)
  const [city, setCity] = useState(undefined)
  const [country, setCountry] = useState(undefined)
  const [error, setError] = useState(undefined)

  // const [addedWether, setAddedWether] = useState()

  const gettingWether = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();

      setTemp(data.main.temp)
      setCity(data.name)
      setCountry(data.sys.country)
      setError('')
    }
  }

  return (
    <div className="App">
      <INFO />
      <FORM weatherScript={gettingWether} />
      <WETHER
        temp={temp}
        city={city}
        country={country}
        error={error}
      />

    </div>
  );
}

export default App;
