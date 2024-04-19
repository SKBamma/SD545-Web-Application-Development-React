import { Framework } from '../../types/frameworks.types';
import http from '../axios';
export const getData = () => {
    return http.get('/products');
};

export const addFramework = (data: Framework) => {
    return http.post('/products', data);
};

// export default [
//     getData,
//     addFramework

// ];