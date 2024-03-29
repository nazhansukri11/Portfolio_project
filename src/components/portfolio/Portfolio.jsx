import React, {useState} from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio=()=>{
    const [items,setItems]=useState(Menu);
    const filterItem=(categoryItem)=>{
        const updateItems=Menu.filter((culElem)=>{
            return culElem.category===categoryItem;
        });
        setItems(updateItems);
    }
    return(
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">My Portfolio</h2>

            <div className="work__filters">
                <span className="work__item" onClick={()=>setItems(Menu)}>All</span>
                <span className="work__item" onClick={()=>filterItem("Programming")}>Programming</span>
                <span className="work__item" onClick={()=>filterItem("Electronic")}>Electronic</span>
            </div>

            <div className="work__container grid">
                {items.map((elem)=>{
                    const{id,image,title,category,link}=elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__image" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>

                        </div>
                        )
                })}

            </div>
        </section>
    )
}

export default Portfolio