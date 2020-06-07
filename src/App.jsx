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
