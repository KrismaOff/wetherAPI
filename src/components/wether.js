import React from 'react'

export default function wether({ temp, city, country, error }) {
    return (
        <div>
            {city &&
                <div>
                    <p>Местоположение: {country} - {city}</p>
                    <p>Температура: {Math.round(temp - 273.15)}</p>
                </div>
            }

        </div>
    )
}
