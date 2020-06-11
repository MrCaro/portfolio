import React from 'react';
import Sections from './content/cardsContent';


const useShowSection = (props) => {
  const requestedSection = Sections;

  return(
      <div className="h-full">
        {requestedSection.filter(result => result.label === props.content).map(show => (
            <div className="relative">
                <h2>{show.title}</h2>
                <h3>{show.subtitle}</h3>
                <p>
                    {show.content}
                </p>
                <div className="absolute top-70 left-0 right-0 mx-auto">
                    <img className="m-auto" src={show.img} alt=""/>
                </div>
            </div>
        ))}
      </div>
  ) ;

};

export default useShowSection;