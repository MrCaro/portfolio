import React from 'react';
import Header from './components/Header';
import Content from "./components/Content";

const App = () => {
    return (
        <div className="container mx-auto max-w-full px-8">
            <Header />
            <Content/>
        </div>
    );
};

export default App;

window.addEventListener('load', () => {
    const preload = document.querySelector('#preload');
    preload.classList.add('preload-finish');
});
