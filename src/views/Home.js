import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import {Image} from "antd"
import { imageLinks } from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <div style={{
                overflow: "scroll",
                marginTop: -70,
                marginBottom: 50
        }}>
           <div style={{
           display: "flex",
        }}>
        <Image.PreviewGroup>
          {
            imageLinks?.map((item) => {
              return <div style={{
                width: "400px",
              }}>
                 <Image style={{
                padding: 5,
                borderRadius: 8
              }} key={item} width={300} height={250} src={item} />
              </div>
            })
          }
  </Image.PreviewGroup>
        </div>
        </div>
      {/* <Cta split /> */}
    </>
  );
}

export default Home;