import React from 'react';

function CustomerForm({handleChange}) {
    return (
        <>
            <input type='text' name='firstname' onChange={(e) => handleChange(e)} />
            <input type='text' name='lastname' onChange={(e) => handleChange(e)} />
            <input type='email' name='email' onChange={(e) => handleChange(e)} />
        </>
    );
}

export default CustomerForm;
