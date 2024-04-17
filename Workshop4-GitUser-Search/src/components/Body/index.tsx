
import './index.css';
import { User, Search_Response } from '../../types/users';

// type Props = {
//     searchResponse: User[];
// };

export default function Body(props: Search_Response) {
    const { isFirst, isLoading, isError, users } = props;
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
