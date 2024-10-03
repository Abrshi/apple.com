import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./slayder.css";
import a from "../../../imag/imgs/slayder/2500x1406 (1).jpg";
import b from "../../../imag/imgs/slayder/2500x1406 (2).jpg";
import c from "../../../imag/imgs/slayder/2500x1406 (3).jpg";
import d from "../../../imag/imgs/slayder/2500x1406 (4).jpg";
import e from "../../../imag/imgs/slayder/2500x1406 (5).jpg";
import f from "../../../imag/imgs/slayder/2500x1406.jpg";

function Slayder() {
  
    return (
        <Carousel
        autoPlay 
        interval={2000} 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        showIndicators={false} 
        // showArrows={false}
        >
                <div>
                    <img src={a} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={b} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={c} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={d} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={e} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={f} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
}

export default Slayder;
