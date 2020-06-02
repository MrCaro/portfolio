import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container mx-auto max-w-full md:px-32 sm:px-8 xs:px-8">
                <div className="grid md:grid-cols-2 xs:grid-cols-1 items-center my-24 xs:my-16">
                    <div className="md:col-span-1 md:mr-6 xs:col-span-1 xs:m-auto">
                        <img id="logo" src={require("../assets/img/test-logo-anim-5.gif")} alt=""/>
                    </div>
                    <div className="md:col-span-1 text-left xs:col-span-1">
                        <h1 className="text-cc_gray-dark xs:text-center">carlos <br/> portfolio</h1>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="md:col-span-2 sm:col-span-1 xs:col-span-1 xs:mb-16">
                        <div className="mr-10 ml-auto md:w-4/6 xs:w-full sm:py-8 sm:px-16 xs:py-4 xs:px-8 neumorphism card">
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
                    <div className="md:col-span-1 sm:col-span-1 xs:col-span-1 relative">
                        <div className="ml-16 absolute sm:left-0 xs:left-0 xs:m-0 neumorphism card mainCtas">
                            <a href="https://nike.com">
                                <img className="p-5" src={require("../assets/img/icon-mail.png")} alt=""/>
                            </a>
                        </div>
                        <div className="ml-40 absolute py-4 xs:ml-20 xs:invisible">
                            <p className="">contact me</p>
                        </div>
                        <div className="ml-16 absolute md:bottom-0 xs:right-0 neumorphism card mainCtas">
                            <a href="https://nike.com">
                                <img className="p-5" src={require("../assets/img/icon-resume.png")} alt=""/>
                            </a>
                        </div>
                        <div className="ml-40 absolute py-4 md:bottom-0 xs:ml-20 xs:invisible">
                            <p className="">resume</p>
                        </div>
                    </div>
                </div>
                <div className="grid my-24 md:grid-cols-5 sm:grid-cols-1 xs:grid-cols-3">
                    <div className="col-start-2 col-span-1 mr-0 ml-auto xs:grid-cols-1 xs:col-start-1 xs:ml-0 neumorphism card mainCtas">
                        <a href="https://nike.com">
                            <img className="p-5" src={require("../assets/img/icon-github.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-3 col-span-1 m-auto xs:grid-cols-1 xs:col-start-2 neumorphism card mainCtas">
                        <a href="https://nike.com">
                            <img className="p-5" src={require("../assets/img/icon-linkedin.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-4 col-span-1 ml-0 xs:grid-cols-1 xs:col-start-3 xs:ml-auto xs:mr-0 neumorphism card mainCtas">
                        <a href="https://nike.com">
                            <img className="p-5" src={require("../assets/img/icon-dribbble.png")} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
