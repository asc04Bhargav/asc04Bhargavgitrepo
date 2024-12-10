import React from "react";
import ReactDom from 'react-dom';
import App from "./app";

it('panders without craching', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<App></App>,div);
})