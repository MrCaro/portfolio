import React, {useState} from 'react';
import Icons from '../assets/js/useIcons';
import Themes from '../assets/js/themeColors';
import Logo from '../assets/img/newIcon-CC.svg';
import ThemeIcon from '../assets/img/icon-themeColors@2x.png';
import carlos2 from '../assets/img/carlosBg3.png';

const Header = () => {
    const themes = Themes;
    const [active, setActive] = useState(false);

    function changeBodyColor(color) {
        document.body.style.backgroundColor = color;
        document.getElementById('themeColorPicker').style.backgroundColor = color;
        document.getElementById('themeColorPickerWrapper').style.backgroundColor = color;
    }

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