import React from 'react';

const Input = ({ id, type, placeholder, label, register, errorMessage }) => {
    return (
        <div className="input-group">

            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} {...register} />
            <span className="error-message">{errorMessage}</span>
        </div>
    );
};

export default Input;