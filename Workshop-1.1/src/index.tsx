
import ReactDOM from 'react-dom/client';


import App from './App';
import { CommentApp } from './App.communication';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <br />
    <h3 style={{ color: "red" }}> Break line between workshop 1 and homework 4 </h3>
    <hr />
    <CommentApp />
  </>

);

