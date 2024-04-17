import './index.css';
import { User, Search_Response } from '../../types/users';
import React, { useEffect, useState } from 'react';

// type Props = {
//     searchResponse: User[];
// };

export default function List() {
    const [searchResponse, setSearchResponse] = useState<Search_Response>({
        isFirst: true,
        isLoading: false,
        isError: false,
        users: []
    });
    const { isFirst, isLoading, isError, users } = searchResponse;

    useEffect(() => {
        const token = PubSub.subscribe('SD545', (msg, data) => {
            setSearchResponse(data);
        });
        return () => {
            PubSub.unsubscribe(token);
        };
    }, []);

    return (
        <div>
            {
                isFirst ? <h2>Please Enter keyword to start</h2> :
                    isLoading ? <h2>Please wait</h2> :
                        isError ? <h2>Whoops! Try later</h2> :
                            <div className="row">
                                {users.map(user => (
                                    <div className="card" key={user.id}>
                                        <a href={user.html_url} target="_blank">
                                            <img src={user.avatar_url} style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">{user.login}</p>
                                    </div>
                                ))}

                            </div>
            }
        </div>
    );
}
