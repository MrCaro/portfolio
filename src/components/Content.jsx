import React, {useState} from 'react';
import Card from '../assets/js/cards';
import Section from '../assets/js/useShowSection';

const Content = () => {
    const cards = Card;
    const [active, setActive] = useState("frontend");

    return (
        <div className="flex flex-col h-80 md:flex-row md:px-24">
            <div id="scrollBar" className="flex flex-row md:flex-col w-full md:w-1/2 overflow-auto">
                {cards.map((singleCard) => (
                    <div className="min-w-sm mx-16 my-10 py-4 px-8 sm:py-8 sm:px-16 neumorphism card">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="sub-title mb-4 md:text-2xl text-lg">
                                <span>{singleCard.title}</span>
                            </h2>
                            <span className="mb-4">
                                 <img src={singleCard.icon} alt=""/>
                            </span>
                        </div>
                        <p className="mb-10">{singleCard.description}</p>
                        <button className="text-white underline"
                                onClick={() => setActive(singleCard.label)}
                        >
                            learn more
                        </button>
                    </div>
                    ))}
            </div>
            <div className="container w-full md:w-1/2 px-8">
                <Section content={active}/>
            </div>
        </div>
    );
};

export default Content;