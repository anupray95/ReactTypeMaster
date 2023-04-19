import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import paragraph from "./datafiles/paragraphs.json"


function Myapp(){

  const [text, setText] = useState(paragraph.text)
  return <div>
    {text}
  </div>
}

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Myapp />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
