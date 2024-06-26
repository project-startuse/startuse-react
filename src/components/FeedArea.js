import React from 'react';
import phoneIcon from '../resources/icons/phone.svg';
import mailIcon from '../resources/icons/mail.svg';

function FeedArea({feed}) {
    
    return (
        <div className='feed-area'>
            {
                feed.map((company, id) => (
                    // name
                    // owner    mobile, email
                    // address
                    // description
                    <div className='feed-item' key={id}>
                        <div className='header'><span className='name'>{company.name}</span><span className='fav-btn'><button>Mark Favourite</button></span></div>
                        <div className='info'>
                            <div><h3>{company.owner}</h3></div>
                            <div className='sub-info'>
                                <span><span><img src={phoneIcon} alt='phone' width={15}/></span><span>{company.mobile}</span></span>
                                <span><span><img src={mailIcon} alt='mail' width={15} /></span><span>{company.email}</span></span>
                            </div>
                        </div>
                        <div className='address'>
                            {
                                
                            }
                        </div>
                        <div className='description'>
                            {
                                company.description.map((point, id) => (
                                    <div key={id}>{point}</div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FeedArea;
