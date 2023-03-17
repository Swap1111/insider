import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "240px",
  color: "#fff",
  marginTop: 0,
  lineHeight: "160px",
  padding: "2px",
  textAlign: "center",
  cursor: "pointer",
  background: "#373435",

};
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//       },
//     },
//   ],
// };
const slider = () => (


  <Carousel autoplay 
  // {...settings}
  >
    <div style={{width:'100%'}}>
      <div style={{ display: "flex" }}>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678365435%2Fed7gmzbh4mrnzq57tdif.jpg"
          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_2000/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677491006%2Fdomerttfen8ds9lkmavj.png"
          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677855486%2Fnih0h4suf9cxmvchvrfi.png"
          />
        </div>
      </div>
    </div>
    <div>
      <div style={{ display: "flex" }}>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677328007%2Flpgwoy3xs9selpsvf4t1.png"
          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677496927%2Fha7mjkz0ttxz4r3qqgwz.jpg"
          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677838744%2Fdh5mvromnhaha5b6gsc1.png"
          />
        </div>
      </div>
    </div>
    <div>
      <div style={{ display: "flex" }}>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678198775%2Fm0lys6cpuqb15ktetwwv.png"

          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678365435%2Fed7gmzbh4mrnzq57tdif.jpg"
          />
        </div>
        <div style={contentStyle}>
          <img
            width='450px'
            height='200px'
            style={{ borderRadius: '10px' }}
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_2000/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677491006%2Fdomerttfen8ds9lkmavj.png"
          />
        </div>
      </div>
    </div>


  </Carousel>
);

export default slider;
