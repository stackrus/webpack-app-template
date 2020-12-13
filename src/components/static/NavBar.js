import React from 'react';
import './css/navbar.css'
import headerLogo from './icons/headerLogo.png'

const NavBar = () => (
    <nav className={"navbar navbar-expand-md navbar-light bg-light sticky-top"}>
        <div className={"container-fluid"}>
            <a href={""} className={"navbar-brand"}> <img src={headerLogo}/></a>
            <button className={"navbar-toggler"} type={"button"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarResponsive"}>
                <ul className={"navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        <a href={""} className={"nav-link"}>Главная</a>
                    </li>

                    <li className={"nav-item"}>
                        <a href={""} className={"nav-link"}>Знакомства</a>
                    </li>

                    <li className={"nav-item"}>
                        <a href={""} className={"nav-link"}>Диалоги</a>
                    </li>

                    <li className={"nav-item"}>
                        <a href={""} className={"nav-link"}>Профиль</a>
                    </li>
                </ul>
            </div>
        </div>
        {/*<h2>Кукусики йопта</h2>*/}
        {/*<div className={"row"}>*/}
        {/*    <div className={"col-sm-3"}>Главная</div>*/}
        {/*    <div className={"col-sm-3"}>Знакомства </div>*/}
        {/*    <div className={"col-sm-3"}>Диалоги </div>*/}
        {/*    <div className={"col-sm-3"}>Профиль </div>*/}

        {/*</div>*/}
    </nav>
);

export default NavBar;
