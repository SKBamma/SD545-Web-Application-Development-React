import axios from 'axios';
import PubSub from 'pubsub-js';
import React, { ChangeEvent, useRef, useState } from 'react';
import { User, Search_Response } from '../../types/users';



export default function Search() {


    // for controlled component
    // const [keyword, setKeyword] = useState(''); 

    // using uncontrolled component ==> useRef
    const inputRef = useRef<HTMLInputElement>(null);


    const search = async () => {
        PubSub.publish("SD545", { isFirst: false, isLoading: true, isError: false, users: [] });

        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${inputRef.current!.value}`); // replace username==> inputRef.current!.value
            if (response.status === 200) {
                PubSub.publish("SD545", { isFirst: false, isLoading: false, isError: false, users: response.data.items });
            } else {
                PubSub.publish("SD545", { isFirst: false, isLoading: false, isError: true, users: [] });
            }
        } catch (error) {
            PubSub.publish("SD545", { isFirst: false, isLoading: false, isError: true, users: [] });
        }
    };

    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text"
                    placeholder="enter the name you search"
                    ref={inputRef}
                />&nbsp;
                <button onClick={search}>Search</button>
            </div>
        </section>
    );
}
