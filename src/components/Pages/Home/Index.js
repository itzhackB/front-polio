import React, { useState, useContext } from 'react'
import Home from './Home'
import me from '../../../Images/me.png'
import './Home.css'
import CV from '../../../Images/Itzhack-CV.pdf'
import Convert from '../../Convert/Convert'
import { MyDataContext } from '../../Contex/Contex'
import ChatBot from 'react-simple-chatbot';

export default function Index(props) {

    const { slides, logoArray, translate, setTranslate } = useContext(MyDataContext)
    const [visibility, setVisibility] = useState("hidden")

    function showAbout() {
        if (visibility === "hidden") {
            setVisibility("visible")
        }
        else {
            setVisibility("hidden")
        }
    }



    const [about, setAbout] = useState("I develop Full Stack sites. Highly motivated to gain more knowledge in the field, I am dedicated to my job, responsible,Enjoys working in a team, interested and willing to learn new technologies.I am a curious person who is focused on details and inspired to learn.")

    return (
        <>
            <header id="home" class="header">
                <nav class="nav">
                    <div class="navigation container">
                        <div class="logo" >
                            <h1 className="animate__animated animate__tada h1" style={{ visibility: translate ? "visible" : "hidden" }} >Web/App Developer
                                <span>.</span></h1>
                            <h1 className="animate__animated animate__tada h1" style={{ visibility: translate ? "hidden" : "visible" }} >
                                <Convert
                                    text="Web/App Developer"
                                    language="heb"

                                /><span>.</span></h1>
                        </div>

                    </div>
                </nav>

                <div class="hero">
                    <h3 className="myName" style={{ visibility: translate ? "visible" : "hidden" }}>Hello, my name is</h3>

                    <h3 style={{ visibility: translate ? "hidden" : "visible" }}><Convert
                        text="Hello, my name is"
                        language="heb" />
                    </h3>

                    <h1 className="itzhack" style={{ visibility: translate ? "visible" : "hidden" }}>Itzhack Bynesai</h1>
                    <h1 style={{ visibility: translate ? "hidden" : "visible" }}>יצחק בינסאי</h1>

                    <a href="#" style={{ visibility: translate ? "visible" : "hidden" }}>Hire me</a>

                    <a href="#" style={{ visibility: translate ? "hidden" : "visible" }}><Convert
                        text="Hire me"
                        language="heb" /> </a>
                </div>

                <img className="banner animate__animated animate__flash" id="me" src={me} alt="" />

                <div class="icons">
                    <span><a href="https://www.facebook.com/yzik9090/"></a><i class="fab fa-facebook-f"></i></span>
                    <span><a href="https://www.instagram.com/itzhak.baynesai/"></a><i class="fab fa-instagram"></i></span>
                    

                </div>
            </header>

            <section className="section about" id="about">
                <div class="title">
                    <h1 style={{ visibility: translate ? "visible" : "hidden" }}>About me</h1>
                    <h1 style={{ visibility: translate ? "hidden" : "visible" }}><Convert
                        text="A little about me"
                        language="heb" /></h1>
                        
                    <span className="curios" style={{ display: "block" }} style={{ visibility: translate ? "visible" : "hidden" }}>If you curious about me</span>

                    <span style={{ display: "block" }} style={{ visibility: translate ? "hidden" : "visible" }}><Convert
                        text="If you curious about me"
                        language="heb" /></span>

                    <a herf="#" style={{ fontSize: "900" }} className="a-show" onClick={showAbout}>
                        <i class="fas fa-arrow-circle-down"></i></a>
                        
                </div>



                <div class="about-center container animate__animated animate__shakeY" style={{ visibility: visibility }} >
                    <div class="left" data-aos="fade-right" data-aos-duration="2000">

                    </div>
                    <div class="right" data-aos="fade-left" data-aos-duration="2000" style={{ visibility: visibility }}>
                        <h1 className="hTitle" style={{ visibility: translate ? "visible" : "hidden" }}>I'm Itzhack a <span id="type2" style={{ visibility: translate ? "visible" : "hidden" }}>Programer</span></h1>
                        <h1 style={{ visibility: translate ? "hidden" : "visible" }}>קוראים לי יצחק ואני <span id="type2">מפתח</span></h1>
                        <strong><p className="aboutMep">
                            < p >
                                {
                                    about
                                }
                            </p>



                            <div style={{ visibility: translate ? "hidden" : "visible" }} >

                                <Convert
                                    text={about}
                                    language="heb"


                                />
                            </div>

                        </p>
                        </strong>
                        <a href={CV} class="aBtn" download style={{ visibility: translate ? "visible" : "hidden" }}>Download CV</a>
                        <a href={CV} class="aBtn" download style={{ visibility: translate ? "hidden" : "visible" }}> <Convert
                            text="Download CV"
                            language="heb"


                        /></a>
                    </div>
                </div>
            </section>




            <div className="container">
                {
                    slides.map(card => {
                        return <Home dataCard={card} />
                    })
                }
            </div>
        </>
    )

}
