import React from 'react'
import './weather.css'

export default function weather({ addedWeather, deleteCity }) {
    return (
        <div>
            {Object.keys(addedWeather).map((key) => {
                const meth = addedWeather[key];
                return (
                    <div key={key} className='container'>
                        <p>Местоположение: {meth.country} - {meth.city}</p>
                        <p>Температура: {Math.round(meth.temp - 273.15)}</p>
                        {!meth.main && <button className='btn' onClick={() => deleteCity(key)}>&#10007;</button>}
                    </div>
                );
            })}
        </div>
    )
}
