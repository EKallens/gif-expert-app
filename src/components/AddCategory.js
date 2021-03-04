import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (inputValue.trim() === '') return;

        setCategories(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                className="input-form"
                placeholder="Ingresa lo que quieres buscar"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;