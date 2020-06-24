import React from 'react';
import Sections from './content/cardsContent';
import Iphone from '../../assets/img/iPhoneX-mockup.png'


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
                <div className="absolute" style={{top: "100%"}}>
                    <img src={Iphone} alt=""/>
                    <div class="iframe-wrapper">
                        <iframe
                            src="https://travel-app-carlos-caro.herokuapp.com/"
                            id="iframe-mobile"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        ))}
      </div>
  ) ;

};

export default useShowSection;