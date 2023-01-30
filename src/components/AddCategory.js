import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }  
    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategorias(categorias => [ inputValue, ...categorias ]);
            setinputValue('');
        }
    }
    return (
        <>
            <form onSubmit={ handleSubmit }>

                {/* <h1>{inputValue}</h1> */}
                <input 
                    type="text"
                    value={ inputValue }
                    onChange = { handleInputChange }
                    placeholder ='Buscar un Gifs'
                />
            </form>
        </>
  )
}

AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired
}