import React from 'react'

export default function form({ weatherScript }) {
    return (
        <form onSubmit={weatherScript}>
            <input type="text" name="city" placeholder='Город' />
            <button>Добавить погоду</button>
        </form>
    )
}
