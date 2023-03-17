import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";
import CardTitle from "./components/CardTitle";
import ComCard1 from "./components/ComCard1";
import ColorCard from "./components/ColorCard";
import ComC2 from "./components/ComC2";
import FootF from "./components/FootF";
import { useNavigate } from "react-router-dom";
import FooterGif from "./FooterGif";


import {  co, event } from './components/JSON/alldata';




function Page1() {


  





  const mysecondpage = useNavigate();

  const handleClick = () => {

    mysecondpage("/Page2");
  }
  return (
    <>
      <Navbar />
      <Slider />
      <div style={{
        display: 'flex',
        marginTop: '10px',
        marginLeft: '60px',
      }}>

        <CardTitle
          image="foot.png"
          title="STEP OUT"
          subtitle="Find safe and exciting events around you."
        />
      </div>

      <div className="compo" onClick={handleClick} style={{ display: 'flex', marginTop: '5px', marginLeft: '30px' }}>
        
          <div className="compo1" style={{
            marginLeft: '30px',
          }}>
            <div style={{display:"flex",padding:'10px'}}>
            <ComCard1  onClick={() => handleClick()} />
            </div>
             </div>
      
      </div>
      <div style={{
        display: 'flex',
        marginTop: '10px',
        marginLeft: '60px',
      }}>
        <CardTitle
          image="location.jpg"
          title="FIND NEW EXPERIENCES"
          subtitle="Step out or stay in. Make a plan"
        />
      </div>
      <div style={{ display: 'flex', width: '100px', marginTop: '5px', marginLeft: '10px' }}>
        {co.map((item, i2) => (
          <div style={{ width: '300px', height: '120px', marginLeft: '5px' }}>
            <ColorCard data={item} />
          </div>
        ))}

      </div>
      <div style={{
        display: 'flex',
        marginTop: '10px',
        marginLeft: '60px',
      }}>
        <CardTitle
          image="menu.png"
          title="BROSE EVENTS BY GENRE"
        />
      </div>
      <div style={{ display: 'flex', width: '100%', marginTop: '5px', marginLeft: '10px' }}>
        {event.map((item, i3) => (
          <div style={{ width: '300px', height: '120px', marginLeft: '5px' }}>
            <ComC2 data={item} />
          </div>
        ))}

      </div>
      <FooterGif className='foot-gif'/>
      <FootF className='footercard' />


    </>
  );
}



export default Page1;
