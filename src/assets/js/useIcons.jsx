import React from 'react';
import header from './headerIcons';
import social from './socialIcons';
import footer from './footerIcons';

const useIcons = (props) => {
    const hIcon = header;
    const sIcon = social;
    const fIcon = footer;
    const currentYear = new Date().getFullYear();

    const IconHeader = () => (
        <div className="flex justify-between md:content-between md:flex-wrap">
            {hIcon.map((icon) => (
                <div key={icon.label} className="flex flex-row w-auto md:w-full">
                    <div className="neumorphism card mainCtas">
                        <a className="sm:flex sm:flex-row" href={icon.href} target="_blank" rel="noopener noreferrer">
                            <img className="p-5" src={icon.img} alt={icon.label}/>
                        </a>
                    </div>
                    <div className="flex md:items-stretch">
                        <p className="m-auto ml-5">{icon.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const IconSocial = () => (
        <div className="flex justify-between my-24 md:justify-center">
        {sIcon.map((icon) => (
            <div key={icon.label} className="w-auto md:mx-8">
                <div className="neumorphism card smallCtas">
                    <a className="" href={icon.url} target="_blank">
                        <img className="p-3" src={icon.img} alt=""/>
                    </a>
                </div>
            </div>
        ))}
        </div>
    );

    const IconFooter = () => (
        <div id="footer" className="w-full h-auto card neumorphism">
            <div className="flex justify-between my-16 md:justify-center flex-wrap">
                {fIcon.map((icon) => (
                    <div key={icon.label} className="w-auto md:mx-8 md:mb-0 mb-16 mx-6">
                        <div className="neumorphism card smallCtas">
                            <a className="" href={icon.url} target="_blank">
                                <img className="p-3" src={icon.img} alt=""/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mb-10">
                <p className="text-cc_gray-light">
                    Carlos Caro | Front-End Developer | {currentYear}
                </p>
            </div>
        </div>
    );

    const project = () => {
        switch(props.iconLocation) {

            case "header":   return IconHeader();
            case "social":   return IconSocial();
            case "footer": return IconFooter();

            default:      return <h2>No icon match</h2>
        }
    };

    return project();
};

export default useIcons;