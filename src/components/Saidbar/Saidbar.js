import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Switch} from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons';
import axios from "axios";
import {ip} from '../../ip';

import './saidbar.css';

import searchIcon from "../../images/content/searchIcon.svg";
import headerImg from "../../images/headerimg/headerImg.png";
import dashIcon from "../../images/dashboard/crmico.svg";
import kursicon from "../../images/dashboard/kursicon.svg";
import klent from "../../images/dashboard/lienticon.svg";
import pericon from "../../images/dashboard/preicon.svg";
import raspisanicon from "../../images/dashboard/raspisanicon.svg";
import fullogo from '../../images/headerimg/fullogo.svg';
import shortlogo from '../../images/headerimg/shortlogo.svg';

import {Link} from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import CoursesCads from "../CoursesContent/Carousel/CoursesCads";
import AddCouese from "../AddCoursseModal/AddCouese";
import TeacherModal from "../teacherModal/TeacherModal";

const {Header, Sider, Content} = Layout;

const Saidbar = () => {

    const [checkedItemTitle, setCheckedItemTitle] = useState('CRM система')
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };



    return (
        <BrowserRouter>
                <Layout  style={{height: '100vh'}}>
                    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo">
                            {
                                collapsed ? <img className="shortlogoImg"  src={shortlogo} alt=""/> :
                                    <img className="fullogoImg" src={fullogo} alt=""/>
                                    }
                        </div>
                        <hr/>
                        <Menu  mode="inline" defaultSelectedKeys={['1']}>
                            <div>
                                {
                                    collapsed ? <p className="close_saidbar_title">DASHBOARD</p> :
                                        <p className="saidbar_title">DASHBOARD</p>
                                }
                            </div>
                            <Menu.Item onClick={() => setCheckedItemTitle('CRM система')} key="1" icon={<img className="dashboard_icons" src={dashIcon} alt=""/>}>
                                <Link to="/crm">
                                    CRM система
                                </Link>
                            </Menu.Item>
                            <Menu.Item onClick={() => setCheckedItemTitle('Курсы')} key="2" icon={<img className="dashboard_icons" src={kursicon} alt=""/>}>
                                <Link to="/kurs">
                                    Курсы
                                </Link>
                            </Menu.Item>
                            <Menu.Item onClick={() => setCheckedItemTitle('Клиенты')} key="3" icon={<img className="dashboard_icons" src={klent} alt=""/>}>
                                <Link to="/klent">
                                    Клиенты
                                </Link>
                            </Menu.Item>
                            <Menu.Item onClick={() => setCheckedItemTitle('Педагоги')} key="4" icon={<img className="dashboard_icons" src={pericon} alt=""/>}>
                                <Link to="/prepodavatel">
                                    Преподаватели
                                </Link>
                            </Menu.Item>
                            <Menu.Item onClick={() => setCheckedItemTitle('Расписание')} key="5" icon={<img className="dashboard_icons" src={raspisanicon} alt=""/>}>
                                <Link to="/raspsane">
                                    Расписание
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout   className="site-layout">
                        <Header  className="site-layout-background headerr" style={{ padding: 0 }}>
                            <div >
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: toggle,
                                })}
                            </div>
                            <div className="header_navbar">
                                <div className="header_right">
                                    <div className="rount_img">
                                        <img src={headerImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </Header>
                        <hr/>

                        <Routes>
                            <Route exact path = '/crm' element = {
                                <Content   className="site-layout-background contentt" >
                                        <div style={{marginRight: '20px'}} className="content_top">
                                            <p className="Content_title">{checkedItemTitle}</p>
                                            <MyButton>Добавить</MyButton>
                                        </div>


                                    <div className="content_bottom" > </div>

                                </Content>
                            } />

                            <Route exact path = '/kurs' element = {
                                <Content   className="site-layout-background contentt" >
                                    <div  className="content_top">
                                            <p className="Content_title">{checkedItemTitle}</p>
                                            <div  className="search">
                                                <img className="searchIcon" src={searchIcon} alt=""/>
                                                <input  className="search_input" type="search" placeholder="Поиск..."/>
                                                <AddCouese />
                                        </div>
                                    </div>
                                      <CoursesCads />

                                </Content>
                            } />

                            <Route exact path = '/klent' element = {
                                <Content   className="site-layout-background contentt" >
                                    <div className="content_top">
                                            <p  className="Content_title">{checkedItemTitle}</p>
                                            <div className="search">
                                                <img className="searchIcon" src={searchIcon} alt=""/>
                                                <input className="search_input" type="search" placeholder="Поиск..."/>
                                                <MyButton >Добавить</MyButton>
                                        </div>
                                    </div>

                                    <div className="content_bottom"  > </div>
                                </Content>
                            } />

                            <Route exact path = '/prepodavatel' element = {
                                <Content   className="site-layout-background contentt" >
                                    <div  className="content_top">
                                            <p className="Content_title">{checkedItemTitle}</p>
                                            <div className="search">
                                                <img className="searchIcon" src={searchIcon} alt=""/>
                                                <input className="search_input" type="search" placeholder="Поиск..."/>
                                                {/*<TeacherModal />*/}
                                            </div>
                                    </div>

                                    <div className="content_bottom" >

                                    </div>

                                </Content>
                            } />

                            <Route exact path = '/raspsane' element = {
                                <Content   className="site-layout-background contentt" >
                                    <div style={{marginRight: '20px'}} className="content_top">
                                        <p className="Content_title">{checkedItemTitle}</p>
                                        <MyButton >Добавить</MyButton>
                                    </div>

                                    <div className="content_bottom" > </div>

                                </Content>
                            } />




                        </Routes>
                    </Layout>
                </Layout>
        </BrowserRouter>
    );
};


export default Saidbar;




