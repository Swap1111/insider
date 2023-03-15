import React from 'react'
import ComCardsmall from './components/ComCardsmall'
import Navbar from './components/Navbar'
import { user2 } from './components/JSON/alldata'
import "./App.css";
import ComCardsmall2 from './ComCardsmall2';
import FootF from './components/FootF';
import ComCard1 from './components/ComCard1';
import { testUsers } from './components/JSON/alldata';
import CardTitle from './components/CardTitle';
import FooterGif from './FooterGif';

export default function page2() {
    return (
        <>
            <Navbar />
            <div className='containercard'>
                <div className="containerleft">
                    <img
                        style={{
                            marginTop: "30px",
                            borderRadius: "10px",
                            width: "700px",
                            marginLeft: "150px",
                            height: "400px",
                        }}
                        src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677325824%2Fwsvnekmmtjeijbutoaoa.png"
                        alt=""
                    />
                    <div
                        className="container2"
                        style={{ width: "700px", marginLeft: "140px", marginTop: "30px" }}
                    >
                        <h4>
                            <strong>About</strong>
                        </h4>
                        <hr style={{ wigth: "700px", paddingTop: "0px" }} />
                        <p>
                            Grammy & Oscar winner A R Rahman to perform his full-fledged Live
                            Concert for Feeding Smiles in Pune!
                        </p>
                        <p>
                            AR Rahman is a name that needs no introduction to Indian music fans.
                            To call him just a musician or composer would do his impact and legacy
                            no justice. Experience the Maestro’s Live Concert for Feeding Smiles
                            in Pune on 30th April 2023.
                        </p>
                        <p style={{ fontWeight: "bold" }}>Official Offline Ticketing Partner</p>
                        <p style={{ fontWeight: "bold" }}>LiveFiesta</p>
                        <p style={{ fontWeight: "bold" }}>
                            Mob: 9821261553 , 9833070733 , 9619272555
                        </p>
                        <p>
                            Throughout his illustrious career, Rahman has composed music for some
                            of the biggest names in the Hollywood, Bollywood and Tamil film
                            industry, and with some of the best singers and musicians. He has
                            several international collaborations as well - including English,
                            Chinese and Iranian films. He has worked with Ranjit Barot, Shivamani,
                            Clinton Cerejo, and international stars like Michael Jackson, Mick
                            Jagger, Kylie Minogue and Zayn Malik.
                        </p>
                        <p>
                            Concert for Feeding Smiles is promoted & produced by 2BHK Alfresco,
                            Pune.
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                FREQUENTLY ASKED QUESTIONS:
                            </span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                                Is this a standing or a seated show?
                            </span>
                            <br />
                            <span>
                                Both. The concert has multiple categories of ticket options which
                                grant you entry to either a standing zone or a seated zone.
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                Is there an age limit to attending the concert?{" "}
                            </span>
                            <br />
                            <span>
                                {" "}
                                We wouldn’t want anyone missing out on this amazing experience. A
                                few things to keep in mind though, children up to the age of 3 years
                                can enter for free but no seating may be provided for them. Children
                                above that age will require a ticket. Due to the live band
                                performance event, all parents/guardians are requested to bring
                                their kids at their own discretion. If you are under the age of 16,
                                you will need to be accompanied by an adult guardian.
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                {" "}
                                Will there be a parking facility at the venue?
                            </span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                                For Solitaire, Platinum and Premium Lounges
                            </span>
                            <span> - Free Valet Parking available at the venue.</span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>For Gold and Silver</span>
                            <span>- AISSMS college ground.</span>
                            <br />
                            <span>For Bikes - Central Railway parking (Besides venue).</span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                Will photography or videography be allowed?
                            </span>
                            <br />
                            <span>
                                No professional photography/videography will be allowed at the
                                concert
                            </span>
                        </p>
                        <h4 style={{ marginBottom: "30px" }}>Venue</h4>
                        <p style={{ marginBottom: "30px" }}>
                            <span>The Mills</span>
                            <br />
                            <span>
                                5, Raja Bahadur Mill Rd, Behind Hotel Grand Sheraton, Sangamvadi,
                                Pune, Maharashtra 411001, India
                            </span>
                            <br />
                        </p>
                        <details>
                            <summary style={{ fontWeight: "bold", fontSize: "25px", marginBottom: "30px" }}>Terms & Conditions</summary>
                            <ul style={{ lineHeight: "13px" }}>
                                <li>Please carry a valid ID proof along with you.</li>
                                <br />
                                <li>
                                    No refunds on purchased ticket are possible, even in case of any
                                    rescheduling.
                                </li>
                                <br />
                                <li>
                                    Security procedures, including frisking remain the right of the
                                    management.
                                </li>
                                <br />
                                <li style={{ lineHeight: "25px" }}>
                                    No dangerous or potentially hazardous objects including but not
                                    limited to weapons, knives, guns, fireworks, helmets, lazer
                                    devices, bottles, musical instruments will be allowed in the venue
                                    and may be ejected with or without the owner from the venue.
                                </li>
                                <br />
                                <li style={{ lineHeight: "25px" }}>
                                    The sponsors/performers/organizers are not responsible for any
                                    injury or damage occurring due to the event.
                                </li>
                                <br />
                                <li>
                                    Any claims regarding the same would be settled in courts in
                                    Mumbai.
                                </li>
                                <br />
                                <li>People in an inebriated state may not be allowed entry.</li>
                                <br />
                                <li>
                                    Organizers hold the right to deny late entry to the event. Venue
                                    rules apply.
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
                < div className='containerright'>

                    {user2.map((item, i) => (

                        <ComCardsmall data={item} />

                    ))}
                    <ComCardsmall2 />
                    <p> <b>Invite your friends </b><br /> and enjoy a shared experience</p>
                </div>
            </div><div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '60px',
            }}>
                <CardTitle style={{ fontSize: '20px' }}
                    title="YOU MAY LOVE THESE TOO 👇"
                />
            </div>
            <div className="compo" style={{ display: 'flex', marginTop: '5px', marginLeft: '30px' }}>
                {testUsers.map((item, i) => (
                    <div className="compo1" style={{
                        marginLeft: '30px', width: '380px'
                    }}>
                        <ComCard1 data={item} />
                    </div>
                ))}
            </div>
            <FooterGif />
            <FootF />
        </>
    )
}
