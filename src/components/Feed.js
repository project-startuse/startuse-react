import authHeader from '../utils/authHeader';
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import getUser from '../utils/getUser';
import '../styles/Feed.css';
import FeedArea from './FeedArea';

function Feed() {
    const [feed, setFeed] = useState([]);
    const [search, setSearch] = useState();
    const user = getUser();

    const loadFeed = async () => {
        const res = await axios.get(`/customers/feed/${user.id}`, authHeader());
        setFeed(res.data);
    }

    const handleSearch = async () => {
        // const tags = search.split(',');
        // const res = await axios.get(`/companies/search`, tags);
        // setFeed(res.data);
    }

    useEffect(() => {
        loadFeed();
    }, []);

    return (
        <div className='feed'>
            <div className='filters'>
                <div className='search'>
                    <input type='text' name='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='other-filters'>

                </div>
            </div>
            <><FeedArea feed={feed} /></>
        </div>
    );
}

export default Feed;
