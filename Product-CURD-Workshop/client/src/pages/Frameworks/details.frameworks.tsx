import React, { useEffect, useState } from 'react';
import { Framework } from '../../types/frameworks.types';

export default function DetailFrameworks() {
    const [product, setProducts] = useState<Framework | null>(null);

    useEffect(() => {
        const token = PubSub.subscribe('products', (msg, data) => {
            setProducts(data);
        });
        return () => {
            PubSub.unsubscribe(token);
        };
    }, []);

    return (
        <>
            {product ? (
                <div className="col">
                    <p>Frameworks Id: {product.id}</p>
                    <p>Frameworks Title: {product.title}</p>
                    <p>Frameworks Language: {product.price}</p>
                    <p>Frameworks Description: {product.description}</p>
                    <p><button className='btn btn-danger'>Delete</button> </p>
                    <p><button className="btn btn-warning">Edit</button> </p>
                </div>
            ) : <h4>Please click on framework to see details</h4>}
        </>
    );
}
