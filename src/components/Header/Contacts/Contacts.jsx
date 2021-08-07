import React from "react";
import style from './Contact.module.css';

const Contacts = (props) => {
    return (
        <div className={style.contactLine}>
            <div className="myContainer">
                <div className={style.gridContainer}>
                    <div className={style.logo}>
                        <div className={style.siteLogo}><img src={props.logoImg} alt="logo"/></div>
                        <div className={style.topSlogan}>Сервис по ремонту электротранспорта</div>
                    </div>
                    <div className={style.phone}>
                        <div className={style.phoneNumber}>
                            <div>
                                <a href={"tel:" + props.phoneNumber} className={style.phoneNuberLink}>{props.phoneNumber}</a>
                            </div>
                            <div className={style.description}>
                                <div className={style.description}><strong>График pабoты: Пн-Пт: 09:00-18:00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.formButton}>

                        <a href="javascript://" data-fancybox="" data-src="#lb-remont" className="coll-back">Заказать
                            ремонт</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Contacts;