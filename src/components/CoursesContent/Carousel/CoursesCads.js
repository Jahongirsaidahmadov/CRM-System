import React, {useState} from 'react';
import prev from "../../../images/content/previcon.svg";
import next from "../../../images/content/nexticon.svg";
import Cart from "../../FaceContent/cart/Cart";
import Carousel, { consts } from 'react-elastic-carousel';
import './coursesCads.css';

const CoursesCads = () => {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ?  <img className="prev" src={prev} alt=""/> : <img className="next" src={next} alt=""/>
        return (
            <button className="nexprev" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const [value, setValue] = useState(0);
    function onChange(value) {
        setValue(value);
    }
const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:500, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1100, itemsToShow: 4},
    {width:1500, itemsToShow: 4},
];



    return (
        <div>
            <div className="content_bottom" >
                <div className="content_bottom_header">
                    <div className="bottom_header_left">
                        Системы комплексной безопасности <p className="card_count">(4)</p>
                    </div>
                </div>

                <div className="content_cards">
                    <div className="top">
                        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                        </Carousel>
                    </div>

                    <div className="content_bottom_header">
                        <div className="bottom_header_left">
                            Компьютерные и сетевые технологии <p className="card_count">(4)</p>
                        </div>
                    </div>

                    <div className="top">
                        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                        </Carousel>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CoursesCads;