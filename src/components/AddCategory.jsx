import React from 'react'
import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [ inputValue, ...categories ])
        setinputValue('')

        onNewCategory(inputValue.trim())

    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>

                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                />

        </form>
    )
}

export default AddCategory
