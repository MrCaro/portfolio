import React from 'react';

const singleCard = (props) => {

    return (
        <div className="flex flex-row justify-between items-center">
            {(props.singleCard.label === props.active)
                ?
                <h2 className="sub-title mb-4 text-lg md:text-2xl">
                    <span>{props.singleCard.title}</span>
                </h2>
                :
                <h2 className="sub-title-inactive mb-4 text-lg md:text-2xl">
                    <span>{props.singleCard.title}</span>
                </h2>
            }
            <span className="mb-4">
                 {(props.singleCard.label === props.active)
                     ?
                     <img src={props.singleCard.icon} alt=""/>
                     :
                     <img src={props.singleCard.icon_inactive} alt=""/>
                 }
            </span>
        </div>
    )
};

export default singleCard;