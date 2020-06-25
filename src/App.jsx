import React from 'react';
import Header from './components/Header';
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div id="content" className="container mx-auto max-w-full px-8" style={{display: "none"}}>
            <Header />
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;

window.addEventListener('load', () => {
    setTimeout(function () {
        const wrapperPreload = document.querySelector('#wrapper-preloader');
        const content = document.querySelector('#content');

        wrapperPreload.classList.add('preload-finish');
        content.style.display = "block";
    }, 4000)
});
