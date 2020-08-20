import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValueChange(event){
        setValue(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        const formValues = {
            title: value,
        }

        onSubmit(formValues);

        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;