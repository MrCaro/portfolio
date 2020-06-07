import React from 'react';
import Icons from '../assets/js/useIcons';
import logo from '../assets/img/test-logo-anim-5.gif';

const Header = () => {

    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center my-24 xs:my-16">
                <div className="col-span-1 m-auto md:mr-12">
                    <img id="logo" src={logo} alt=""/>
                </div>
                <div className="col-span-1 text-center md:text-left">
                    <h1 className="text-cc_gray-dark">carlos <br/> portfolio</h1>
                </div>
            </div>
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
