import React from 'react';

const Card=(props)=>{
    return(
        <div className="timeline__item">
            <i className={props.icon}></i>
            <h2 className="timeline__date">{props.year}</h2>
            <span className="timeline__title">{props.title}</span>
            <p className="timeline__text">{props.desc}</p>
        </div>
    )
}

export default Card