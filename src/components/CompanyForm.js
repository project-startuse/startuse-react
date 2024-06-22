import React from 'react';

function CompanyForm({handleChange}) {
    return (
        <>
            <input type='text' name='name' placeholder='company name' onChange={(e) => handleChange(e)} />
            <input type='text' name='owner' placeholder='owner name' onChange={(e) => handleChange(e)} />
            <input type='textarea' name='description' placeholder='description about company' onChange={(e) => handleChange(e)} />
            <input type='text' name='tags' placeholder='tags seperated by ,' onChange={(e) => handleChange(e)} />
        </>
    );
}

export default CompanyForm;
