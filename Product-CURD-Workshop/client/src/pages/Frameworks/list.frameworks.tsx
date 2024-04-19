import React, { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
import { Framework } from '../../types/frameworks.types';
import { getData } from '../../apis/services/frameworks.services';


export default function ListFrameworks() {
    const [product, setProducts] = useState<Framework[]>([]);

    //fetch
    useEffect(() => {
        async function getFrameworks() {
            const response = await getData();
            setProducts(response.data);
        }
        getFrameworks();
    }, []);

    const showDetail = (fram: Framework) => {
        PubSub.publish('products', fram);
    };
    return (
        <div className="col">
            <ul className="list-group">
                {product.map(fram =>
                    <li key={fram.id} className="list-group-item list-group-item-action"
                        onClick={() => showDetail(fram)}
                    >{fram.title}</li>)}


            </ul>
        </div>
    );
}
