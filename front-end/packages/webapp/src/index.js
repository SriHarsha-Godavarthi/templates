import React from 'react'
import  { createRoot }  from 'react-dom/client';
// import TextField from "@packages/components/textField/TextField"
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App /*props goes here*//>)