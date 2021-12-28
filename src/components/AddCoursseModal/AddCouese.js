import React, { useState } from "react";
import * as Yup from "yup";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import addIcon from '../../images/content/addIcon.svg';
import dateIcon from '../../images/content/dateIcon.svg';
import filleIcon from '../../images/content/fileIcon.svg';


import "./addCourse.css";

import Modal from "react-modal";
import MyButton from "../UI/Button/MyButton";

Modal.setAppElement("#root");

export default function AddCouese() {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(false);

    const toggle = () => {
        setSelect(!select);
    };


    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const initialValues = {
        courseSelect: '',
        courseName: '',
        coursePrice: '',
        coursePriceright: '',
        courseHour: '',
        courseIcon: '',
    }

    const validationSchema = Yup.object({
        courseSelect: Yup.string().required('тўлдирилмаган ...'),
        courseName: Yup.string().required('тўлдирилмаган ...'),
        coursePrice: Yup.string().required('тўлдирилмаган ...'),
        coursePriceright: Yup.string().required('тўлдирилмаган ...'),
        courseHour: Yup.string().required('тўлдирилмаган ...'),
        courseIcon: Yup.string().required('тўлдирилмаган ...'),
    })

    return (
        <div className="add_client_modal">
            <button className="modalbtn" onClick={toggleModal}>Добавить</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                    <Formik
                        initialValues = {initialValues}
                        validationSchema = {validationSchema}
                    >
                        <Form>
                           <div className="modal_inputs">
                               <div className="modal_title"> Добавить курс </div>

                               {
                                   select
                                       ?
                                       <div className="changeInput" >
                                           <label className="modal_label" htmlFor="newCourse">Добавить новую категорию</label>
                                           <Field className="input_select" id="newCourse" name="newCourse" placeholder="Пишите здесь" />
                                           <ErrorMessage style={{color: '#FFC700'}} name = "newCourse" component = 'div' className = "error" />
                                           <div  className="add_new_categorie">
                                               <img onClick={toggle} className="addicon newAddImg" src={addIcon} alt=""/>
                                               <p className="categorie_text newAdd">Добавить</p>
                                           </div>
                                       </div>
                                       :
                                       <div className="changeInput" >
                                           <label className="modal_label" htmlFor="courseSelect">Категория</label>
                                           <Field className="input_select" name="courseSelect" component="select" placeholder="Select Group (Just one)">
                                               <option hidden >Выбор</option>
                                               <option value="2">categoria1</option>
                                               <option value="3">categoria2</option>
                                           </Field>
                                           <ErrorMessage style={{color: '#FFC700'}} name = "courseSelect" component = 'div' className = "error" />
                                           <div  className="add_new_categorie">
                                               <img onClick={toggle} className="addicon" src={addIcon} alt=""/>
                                               <p className="categorie_text">Добавить новую категорию</p>
                                           </div>
                                       </div>
                               }



                               <label className="modal_label" htmlFor="courseName">Название курса</label>
                               <Field className="input_select" id="courseName" name="courseName" placeholder="Пишите здесь" />
                               <ErrorMessage style={{color: '#FFC700'}} name = "courseName" component = 'div' className = "error" />

                               <div className="price_inputs">
                                   <div className="left_input">
                                       <label className="modal_label" htmlFor="coursePrice">Для физических лиц</label>
                                       <Field className="price_input_lr" id="coursePrice" name="coursePrice" placeholder="Введите цену" type="number" />
                                       <ErrorMessage style={{color: '#FFC700'}} name = "coursePrice" component = 'div' className = "error" />
                                   </div>

                                   <div className="right_input">
                                       <label className="modal_label" htmlFor="coursePriceright">Для организаций</label>
                                       <Field className="price_input_lr" id="coursePriceright" name="coursePriceright" placeholder="Введите цену" type="number" />
                                       <ErrorMessage style={{color: '#FFC700'}} name = "coursePriceright" component = 'div' className = "error" />
                                   </div>
                               </div>

                               <div className="hour_inputs">
                                   <label className="modal_label" htmlFor="courseHour">Продолжительность курса и часы</label>
                                   <Field className="input_select date_hour" id="courseHour" name="courseHour" placeholder="Пишите здесь" />
                                   <ErrorMessage style={{color: '#FFC700'}} name = "courseHour" component = 'div' className = "error" />
                                   <img className="dateIcon" src={dateIcon} alt=""/>
                               </div>

                               <div className="file_input">
                                   <label className="modal_label" htmlFor="courseIcon"> Значок курса</label>
                                   <Field className="input_select add_top_icon" id="courseIcon" name="courseIcon" placeholder="Выбор" />
                                   <ErrorMessage style={{color: '#FFC700'}} name = "courseIcon" component = 'div' className = "error" />
                                   <img className="fileIcon" src={filleIcon} alt=""/>
                               </div>

                             <div className="Add_btn">
                                 <MyButton >Добавить</MyButton>
                             </div>

                           </div>
                        </Form>
                    </Formik>


            </Modal>
        </div>
    );
}



