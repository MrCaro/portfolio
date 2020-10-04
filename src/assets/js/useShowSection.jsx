import React from 'react';
import Sections from './content/cardsContent';
import Iphone from '../../assets/img/iPhoneX-mockup.png';
import UiDesign from '../../assets/img/bottlePink-trans.png';
import ProfilePic from '../../assets/img/memoji-charlie.png';
import Render3D from '../../assets/img/model.glb';


const useShowSection = (props) => {
  const requestedSection = Sections;

  return(
      <div className="h-full">
        {requestedSection.filter(result => result.label === props.content).map(show => (
            <div className="relative">
                <h2 className="text-cc_magenta font-thin my-10 md:mt-auto">
                    {show.title}
                </h2>
                <h3 className="text-xl md:text-3xl mb-4 md:mb-8">
                    {show.subtitle}
                </h3>
                <p className="leading-loose whitespace-pre-wrap sm:text-lg">
                    {show.content}
                </p>
                <div className="absolute top-70 left-0 right-0 mx-auto">
                    <img className="m-auto" src={show.img} alt=""/>
                </div>
                {(show.label === "aboutme")
                    ?
                    <img className="m-auto mt-8" src={ProfilePic} alt=""/>
                    :
                   <p></p>
                }
                {(show.label === "frontend")
                    ?
                    <div className="wrapper-projects-front-end">
                        <div className="relative">
                            <p>
                                <a
                                    href="https://www.hootenyoung.com/product/american-whiskey/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hooten Young Landing Page - Full Landing Page Dev (shown in mobile iframe)
                                </a>
                            </p>
                            <br/>
                            <p>
                                <a
                                    href="https://hf.org/ahap/medicare/learn_more/seminars/index.cfm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Health First AHAP Seminar - Full Page Redesign
                                </a>
                            </p>
                            <br/>
                            <p>
                                <a
                                    href="https://travel-app-carlos-caro.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Travel App - Full Site Dev
                                </a>
                            </p>
                            <br/>
                            <p>
                                <a
                                    href="https://mablog.hf.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Health First Blog Site - Full Site Dev
                                </a>
                            </p>
                        </div>
                        <div className="absolute" style={{top: "100%"}}>
                            <img src={Iphone} alt=""/>
                            <div className="iframe-wrapper">
                                <p>Loading...</p>
                                <iframe
                                    className=""
                                    src="https://www.hootenyoung.com/product/american-whiskey/"
                                    id="iframe-mobile"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                    :
                    <p></p>
                }
                {(show.label === "uidesign")
                    ?
                    <img className="dr-freeze mt-8" src={UiDesign} alt=""/>
                    :
                   <p></p>
                }
                {(show.label === "3dmodeling")
                    ?
                    <model-viewer
                        src={Render3D}
                        auto-rotate camera-controls
                        alt="3D model face"
                        class="w-full z-50"
                    >
                    </model-viewer>
                    :
                   <p></p>
                }
            </div>
        ))}
      </div>
  ) ;

};

export default useShowSection;
