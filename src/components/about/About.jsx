import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-nazhan1.png"
import Nazhan from "../../assets/AhmadNazhanbinSukri_Resume.pdf";

const About=()=>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__info">
                    <p className="about__description">
                        I am Nazhan Sukri, I am passionate in pursuing career in any 
                        potential organization related to Software and IT that will
                        develop my personality and technical skills continuously. 
                    </p>
                    
                    <a href={Nazhan} className="btn">Download CV  </a>
                </div>

            
            </div>


        </section>

    )
}

export default About