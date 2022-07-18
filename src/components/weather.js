import React from 'react'

export default function weather({ addedWeather }) {
    return (
        <div>
            <div>
                {Object.keys(addedWeather).map((key) => {
                    return (
                        <div key={key}>
                            <p>Местоположение: {addedWeather[key].country} - {addedWeather[key].city}</p>
                            <p>Температура: {Math.round(addedWeather[key].temp - 273.15)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
