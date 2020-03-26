import React from 'react';
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg" 
 const Banner = () => {
  return (
    <section className="main">
        <div className="container">
            <div className="row">
                <h2>
                    <div className="line">
                        <span>Créer une image de marque unique</span>
                    </div>
                    <div className="line">
                        <span>c'est notre job</span>
                    </div>
                </h2>
                <div className="btn-row">
                    <a href="/">En savoir plus <RightArrow /></a>
                </div>
            </div>
        </div>
    
    </section>
  );
}
export default Banner;