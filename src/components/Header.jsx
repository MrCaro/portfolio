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
            {/* logo and title */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center my-24 xs:my-16">
                <div className="col-span-1 mb-6 m-auto md:mb-auto md:mr-12">
                    <img id="logo" className="" src={Logo} alt="carlos caro web developer"/>
                </div>
                <div className="col-span-1 text-center md:text-left">
                    <h1 className="text-cc_gray-dark">carlos <br/> portfolio</h1>
                </div>
            </div>
            {/* select the color */}
            <div id="themeColorPickerWrapper"
                 className={(active)
                     ?
                     'themeCard-show neumorphism card w-32 p-2 md:block hidden'
                     :
                     "themeCard-hide neumorphism card w-32 p-2 md:block hidden"}
            >
                <p className="text-cc_gray-light text-base">
                    Change theme here <br/> (select color)
                </p>
                <br/>
                {themes.map((chooseColor) => (
                    <div className="" style={{color: '#ffffff', backgroundColor: chooseColor.color}}>
                        <button
                            value={chooseColor.label}
                            onClick={() => changeBodyColor(chooseColor.color)}>
                            {chooseColor.label}
                        </button>
                    </div>
                ))}
                <div id="themeColorPicker" className="neumorphism card p-2 w-20 text-center">
                    <button id="toggleBodyColor"
                            className=''
                            onClick={() => setActive(!active)}
                    >
                        <img src={ThemeIcon} alt=""/>
                    </button>
                </div>
            </div>
            <div className="absolute -z-1 right-0 top-0 hidden md:block">
                {/*<img src={carlos2} alt=""/>*/}
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