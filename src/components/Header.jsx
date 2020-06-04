import React from 'react';
import Icons from '../assets/js/useIcons';
import logo from '../assets/img/test-logo-anim-5.gif';

const Header = () => {

    return (
        <div className="container mx-auto max-w-full md:px-32 sm:px-8 xs:px-8">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 items-center my-24 xs:my-16">
                <div className="md:col-span-1 md:mr-6 xs:col-span-1 xs:m-auto">
                    <img id="logo" src={logo} alt=""/>
                </div>
                <div className="md:col-span-1 text-left xs:col-span-1">
                    <h1 className="text-cc_gray-dark xs:text-center">carlos <br/> portfolio</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
                <div className="md:col-span-2 sm:col-span-1 xs:col-span-1 xs:mb-16">
                    <div className="mr-10 ml-auto md:w-4/6 sm:w-full xs:w-full sm:py-8 sm:px-16 xs:py-4 xs:px-8 neumorphism card">
                        <h2 className="sub-title mb-4 md:text-2xl xs:text-lg">
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
