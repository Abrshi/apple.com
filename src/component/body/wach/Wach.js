// Body.js
import React from 'react';
import PropsComponent from "../../props-component/PropsComponent.js";
import "../body.css";
import applwech from "../../../imag/icon/applwach/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large_2x.png";
function Body() {
  return (
    <div>
    <PropsComponent
    inerdiv1="WatchSeries inerdiv1"
      h1=<img src={applwech} alt=""/>
      h2="Double tap. A magical new way to use Apple Watch"
      link1="#"
      link2="#"
    />

    </div>
  );
}

export default Body;
