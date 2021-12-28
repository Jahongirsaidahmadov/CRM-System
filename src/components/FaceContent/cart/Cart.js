import React from 'react';
import "./cart.css";
import rImg1 from '../../../images/content/rimg1.svg';
import dateIcon from '../../../images/content/dateIcon.svg';



const Cart = () => {
    return (
        <>
            <div className="my_card">
                <div className="card_inner">
                    <div className="card_round">
                        <div className="card_round_img">
                            <img src={rImg1} alt=""/>
                        </div>
                    </div>

                    <div className="card_title">
                        <p>Эксплуатация и техническое обслуживание систем видеонаблюдения.</p>
                    </div>

                    <div  className="card_text">
                        <p className="card_text_p">Для физических лиц – 1 000 000 сум </p>
                        <p className="card_text_p">Для организаций – 1 000 000 сум</p>
                    </div>

                    <div className="card_bottom">
                        <img src={dateIcon} alt=""/>
                        <p className="card_bottom_p">5 дней по 8 часов / 10 дней по 4 часа </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;