import React from 'react';
import "./resume.css";

const Resume=()=>{
    return(
        <section className="resume container section" id="resume">
            <div className="section__title">Experience</div>

            <div className="resume__container grid">
                <div className="timeline grid"></div>
            </div>
        </section>
    )
}

export default Resume