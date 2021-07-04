import React, { useState,useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Link.css'
import { SidebarHeader } from 'react-pro-sidebar';
import { SidebarContent } from 'react-pro-sidebar';
import { SidebarFooter } from 'react-pro-sidebar';
import Convert from '../../Convert/Convert';
import { MyDataContext } from '../../Contex/Contex';

export default function Links() {
    const { translate, setTranslate } = useContext(MyDataContext)
    const [lang, setLang] = useState("Hebrew")
    function Translate() {
        if (translate === true)
            setTranslate(false)
            setLang("English")
           
        if (translate == false) {
            setTranslate(true)
            setLang("Hebrew")
            
        }
        
    }
   

    return (
        <div>
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul class="sidebar-nav nav">
                        <li class="sidebar-brand">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/Skills"}>Skills</Link>
                        </li>
                        <li>
                            <Link to={"/PortFolio"}>PortFolio</Link>
                        </li>
                        <li>
                            <Link to={"/Contact-me"}>Contact me</Link>
                        </li>
                        <li >
                            <a onClick={Translate}>{lang}</a> 

                        </li>

                    </ul>
                </nav>
            </div>




            {/* 
            <div class="containerLink">
                <nav id="navbar">
                    <ul class="mcd-menu">
                        <li>
                            <a href="">
                                <i class="fa fa-home"></i>
                                <Link to={"/"}>Home</Link>

                            </a>
                        </li>
                        <li>
                            <a href="" class="active">
                                <i class="fa fa-edit"></i>
                                <Link to={"/Skills"}>Skills</Link>

                            </a>
                        </li>


                        <li>
                            <a href="">
                                <i class="fa fa-picture-o"></i>
                                <Link to={"/PortFolio"}>PortFolio</Link>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-envelope-o"></i>
                                <Link to={"/Contact-me"}>Contact me</Link>

                            </a>
                        </li>

                    </ul>
                </nav>
            </div> */}

        </div>
    )
}
