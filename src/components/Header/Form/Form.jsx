import React from "react";
import style from './Form.module.css'


const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлена форма.');
    }

    return (
        <div className={style.form}>
            <div className={style.formTitle}>{props.title}</div>
            <div className={style.formText}>
                {props.text}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={props.formTextPlaceholderOne}/>
                <input type="tel" name="phone" placeholder={props.formTextPlaceholderTwo} required=""/>
                <input type="hidden" name="discount" value="Скидка 15%"/>
                <button type="submit"
                        className={style.sendButton}>Пoлучить скидку
                </button>

            </form>
        </div>
    );
}


export default Form;