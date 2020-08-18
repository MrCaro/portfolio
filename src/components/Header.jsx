import React from 'react';
import Icons from '../assets/js/useIcons';
import Logo from '../assets/img/newIcon-CC.svg';
import htmlIcon from '../assets/img/icon-html5-color.svg';
import reactIcon from '../assets/img/icon-react-color.svg';
import cssIcon from '../assets/img/icon-css-color.svg';
import gitIcon from '../assets/img/icon-git-color.svg';
import jsIcon from '../assets/img/icon-js-color.svg';

//TODO add hover for tech skills svg's
//TODO resize tech skills svg to 40px maybe

const Header = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center my-24 xs:my-16">
                <div className="col-span-1 mb-6 m-auto md:mb-auto md:mr-12">
                    <img id="logo" className="" src={Logo} alt="carlos caro web developer"/>
                </div>
                <div className="col-span-1 text-center md:text-left">
                    <h1 className="">carlos <br/> portfolio</h1>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center mb-16">
                <img className="programming-icons w-8 m-3 sm:mx-6" src={htmlIcon} alt=""/>
                <img className="programming-icons w-8 m-3 sm:mx-6" src={reactIcon} alt=""/>
                <img className="programming-icons w-8 m-3 sm:mx-6" src={cssIcon} alt=""/>
                <img className="programming-icons w-8 m-3 sm:mx-6" src={gitIcon} alt=""/>
                <img className="programming-icons w-8 m-3 sm:mx-6" src={jsIcon} alt=""/>
            </div>
            <div className="grid grid-cols-1 mb-16" style={{justifyItems: "center"}}>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox"/>
                        <div className="slider round neumorphism"></div>
                    </label>
                    <em>enable light mode!</em>
                </div>
            </div>
            {/* main card info */}
            <div className="flex flex-col md:flex-row md:justify-center">
                <div className="mb-24 md:mb-auto md:mr-16">
                    <div className="w-full py-4 px-8 md:mr-10 md:ml-auto md:w-auto sm:py-8 sm:px-16 neumorphism card">
                        <h2 className="text-lg mb-4 md:text-2xl sub-title">
                            i am a <span>front-end developer</span>
                        </h2>
                        <p>
                            Create unforgettable digital experiences is my ultimate goal.
                        </p>
                        <p>
                            Carlos Caro | Orlando, Fl
                        </p>
                    </div>
                </div>
                <Icons iconLocation="header"/>
            </div>
                <Icons iconLocation="social"/>
        </div>
    );
};

export default Header;

