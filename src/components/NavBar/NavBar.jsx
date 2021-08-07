import React, {useState} from "react";
import style from './NavBar.module.css';


const NavBar = () => {

    const [state, setState] = useState(true);

    return (
        <nav className={style.topMenu}>
            {/*<div className="myContainer">*/}

                <div onClick={() => setState(!state)}
                     className={state ? style.menuIcon : (style.menuIcon + ' ' +style.menuIconOpen)}
                />


                <ul id="menu" className={state ? style.slideClosed : style.slideOpened}>
                    <li><a href={'#m1'}>Наши услуги</a></li>
                    <li><a href={'#m2'}>Узнать стoимoсть</a></li>
                    <li><a href={'#m3'}>Написать директору</a></li>
                    <li><a href={'#m5'}>Гаpантия</a></li>
                    <li><a href={'#m6'}>Кoнтакты</a></li>

                </ul>


            {/*</div>*/}
        </nav>
    )
        ;
}

export default NavBar;