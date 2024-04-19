import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { addFramework } from '../../apis/services/frameworks.services';

export default function AddFrameworks() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.currentTarget.value));
    };
    const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value);
    };
    const Add = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await addFramework({ title, price, description });
        setTitle('');
        setPrice(0);
        setDescription("");

    };


    return (
        <div className='mt-5'>
            <h3>Add a Frameworks</h3>
            <form >
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input className="form-control" id="title" name='title' value={title} onChange={handleTitle} />

                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name='price' onChange={handlePrice} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input className="form-control" id="description" name='description' onChange={handleDescription} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={Add}>Add Framework</button>
            </form>
        </div>
    );
}
