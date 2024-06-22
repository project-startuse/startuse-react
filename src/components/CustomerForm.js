import React from 'react';

function CustomerForm({handleChange, content}) {
    return (
        <>
            <input type='text' name='firstName' placeholder='first name' value={content.firstName} onChange={(e) => handleChange(e)} />
            <input type='text' name='lastName' placeholder='last name' value={content.lastName} onChange={(e) => handleChange(e)} />
        </>
    );
}

export default CustomerForm;
