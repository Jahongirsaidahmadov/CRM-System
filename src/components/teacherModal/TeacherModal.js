import React, { useState } from "react";
import * as Yup from "yup";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import camera from '../../images/content/camera.svg';


import "./teacherModal.css";
import Modal from "react-modal";
import MyButton from "../UI/Button/MyButton";

Modal.setAppElement("#root");

export default function TeacherModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(false);

    const toggle = () => {
        setSelect(!select);
    };
    function toggleModal() {
        setIsOpen(!isOpen);
    }

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
                    initialValues={{
                        firstName: '',
                        teacherInfo: '',
                        teacherTel: +998,
                        homeAdress: '',
                        Speciality: '',
                        CourseConducted: '',
                        ContractNumber: '',
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('тўлдирилмаган ...'),
                        teacherInfo: Yup.string().required('тўлдирилмаган ...'),
                        teacherTel: Yup.string().required('тўлдирилмаган ...'),
                        homeAdress: Yup.string().required('тўлдирилмаган ...'),
                        Speciality: Yup.string().required('тўлдирилмаган ...'),
                        CourseConducted: Yup.string().required('тўлдирилмаган ...'),
                        ContractNumber: Yup.string().required('тўлдирилмаган ...'),
                    })}
                >
                    <Form>
                        <div className="modal_inputs">
                            <div className="modal_title"> ДОБАВЛЕНИЕ УЧИТЕЛЯ </div>

                            <div className="info_inputs">
                                <div className="info_inputs_left">
                                    <label className="modal_label" htmlFor="firstName">Ф.И.О</label>
                                    <Field className="input_select" id="firstName" name="firstName" placeholder="Пишите здесь" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "firstName" component = 'div' className = "error" />

                                    <label className="modal_label" htmlFor="teacherTel">Телефон</label>
                                    <Field className="input_select" id="teacherTel" name="teacherTel" placeholder="Пишите здесь" type="number" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "teacherTel" component = 'div' className = "error" />
                                </div>
                                <label className="img_box" htmlFor="imgBox">
                                    <label className="modal_label" htmlFor="imgBox">Фото</label>
                                    <div  className = "img_icon">
                                        <img className="camera_icon" src = {camera} alt = 'icon'/>
                                    </div>
                                </label>
                            </div>

                            <div className="price_inputs">
                                <div className="left_input">
                                    <label className="modal_label" htmlFor="homeAdress">Домашний адрес</label>
                                    <Field className="price_input_lr" id="homeAdress" name="homeAdress" placeholder="Пишите здесь" type="text" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "homeAdress" component = 'div' className = "error" />
                                </div>

                                <div className="right_input">
                                    <label className="modal_label" htmlFor="Speciality">Специальность</label>
                                    <Field className="price_input_lr" id="Speciality" name="Speciality" placeholder="Пишите здесь" type="text" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "Speciality" component = 'div' className = "error" />
                                </div>
                            </div>

                            <div className="price_inputs">
                                <div className="left_input">
                                    <label className="modal_label" htmlFor="CourseConducted">Проводимый курс</label>
                                    <Field className="price_input_lr" id="CourseConducted" name="CourseConducted" placeholder="Пишите здесь" type="text" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "CourseConducted" component = 'div' className = "error" />
                                </div>

                                <div className="right_input">
                                    <label className="modal_label" htmlFor="ContractNumber">Номер договора</label>
                                    <Field className="price_input_lr" id="ContractNumber" name="ContractNumber" placeholder="Пишите здесь" type="text" />
                                    <ErrorMessage style={{color: '#FFC700'}} name = "ContractNumber" component = 'div' className = "error" />
                                </div>
                            </div>

                            <div className="text_area">
                                  <textarea
                                      className="textarea"
                                      placeholder="Пишите здесь"
                                      rows={3}
                                  />
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



