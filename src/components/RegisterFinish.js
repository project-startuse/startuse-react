import React from 'react';

function RegisterFinish({handleAddressChange, address}) {
    return (
        <>
            <div className='address'>
                <input type='text' name='door' placeholder='door' value={address.door} onChange={(e) => handleAddressChange(e)} />
                <input type='text' name='street' placeholder='street' value={address.street} onChange={(e) => handleAddressChange(e)} />
                <input type='text' name='city' placeholder='city' value={address.city} onChange={(e) => handleAddressChange(e)} />
                <input type='text' name='state' placeholder='state' value={address.state} onChange={(e) => handleAddressChange(e)} />
                <input type='text' name='country' placeholder='country' value={address.country} onChange={(e) => handleAddressChange(e)} />
            </div>
        </>
    );
}

export default RegisterFinish;
