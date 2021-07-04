import React, { useContext } from 'react'
import './Skills.css'
import { MyDataContext } from '../../Contex/Contex'
import Convert from '../../Convert/Convert'

export default function Skills() {
    const { logoArray, translate, setTranslate } = useContext(MyDataContext)
    return (
        <div className="skills">
            <div className="h1Title">
                <h1 style={{ visibility: translate ? "visible" : "hidden" }}>Skills</h1>
                <h1 style={{ visibility: translate ? "hidden" : "visible" }}><Convert text="Skills" language="heb" /></h1>

            </div>


            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "visible" : "hidden" }}>Technologies Client:</h2>
            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "hidden" : "visible" }}><Convert text="Technologies Client:" language="heb" /></h2>

            <div className="technologies" >
                {
                    logoArray.map(item => {
                        return <div className="skillsItem animate__animated animate__bounce">{item.logoClient} </div>
                    })
                }
            </div>
            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "visible" : "hidden" }}>Technologies Server:</h2>
            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "hidden" : "visible" }}><Convert text="Technologies Server:" language="heb" /></h2>

            <div className="technologiesServer" >
                {
                    logoArray.map(item => {
                        return <div className="animate__animated animate__bounce">{item.logo} </div>
                    })
                }
            </div>

            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "visible" : "hidden" }}>Tools & IDE</h2>
            <h2 style={{ textDecorationLine: "underline" }} style={{ visibility: translate ? "hidden" : "visible" }}><Convert text="Tools & IDE" language="heb" /></h2>
            <div className="tools animate__animated animate__bounce" >
                {
                    logoArray.map(item => {
                        return <div>{item.tool} </div>
                    })
                }
            </div>


        </div>
    )
}
