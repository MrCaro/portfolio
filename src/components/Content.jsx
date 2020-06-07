import React from 'react';
import content from '../assets/js/contentInfo';

const Content = () => {
    const section = content;

    return (
        <div className="flex flex-col md:flex-row h-80">
            <div id="scrollBar" className="flex flex-row md:flex-col w-full md:w-1/2 overflow-auto">
                {section.map((display) => (
                    <div className="min-w-sm mx-16 my-10 sm:py-8 sm:px-16 py-4 px-8 neumorphism card">
                        <h2 className="sub-title mb-4 md:text-2xl text-lg">
                            <span>{display.title}</span>
                        </h2>
                        <p>{display.description}</p>
                        <a href="">
                            learn more
                        </a>
                    </div>
                    ))}
            </div>
            <div className="container w-full md:w-1/2 px-8">
                <p>test</p>
            </div>
        </div>
    );
};

export default Content;