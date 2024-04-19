import React from 'react';
import ListFrameworks from './list.frameworks';
import DetailFrameworks from './details.frameworks';

export default function FrameworksList() {
    return (
        <div className="row mt-5">
            <ListFrameworks />
            <DetailFrameworks />

        </div>
    );
}
