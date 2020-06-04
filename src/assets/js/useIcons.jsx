import React from 'react';
import header from './headerIcons';
import social from './socialIcons';

const useIcons = (props) => {
    const hIcon = header;
    const sIcon = social;

    const IconHeader = () => (
        <div className="flex flex-wrap content-between sm:justify-between xs:justify-between">
            {hIcon.map((icon) => (
                <div key={icon.label} className="md:w-full">
                    <div className="neumorphism card mainCtas">
                        <a className="sm:flex sm:flex-row" href={icon.href} target="_blank">
                            <img className="p-5" src={icon.img} alt={icon.label}/>
                            <p className="m-auto sm:ml-5 xs:mt-5">{icon.label}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );

    const IconSocial = () => (
        <div className="flex my-24 xs:justify-between">
            <div className="w-full xs:hidden"></div>
            {sIcon.map((icon) => (
                <div key={icon.label} className="w-auto sm:mx-8">
                    <div className="m-auto neumorphism card mainCtas">
                        <a className="" href={icon.url} target="_blank">
                            <img className="p-5" src={icon.img} alt=""/>
                        </a>
                    </div>
                </div>
            ))}
            <div className="w-full xs:hidden"></div>
        </div>
    );

    const project = () => {
        switch(props.iconLocation) {

            case "header":   return IconHeader();
            case "social":   return IconSocial();
            // case "footer": return IconFooter();

            default:      return <h2>No icon match</h2>
        }
    };

    return project();
};

export default useIcons;