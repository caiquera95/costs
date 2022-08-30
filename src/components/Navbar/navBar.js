import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './navBar.module.css';

import Container from '../Layout/container.js';

import logo from '../../assets/costs_logo.png';

import { GiHamburgerMenu } from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

export default function Header() {
    const [showMenuMobile, setTMenuMobile] = useState(false)

    function toggleMenu() {
        setTMenuMobile(!showMenuMobile)
    }

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} /></Link>

                <ul className={styles.list}>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    {/* <li>
                        <Link to="/contact">Contato</Link>
                    </li> */}

                    <li>
                        <Link to="/newProject">Novo Projeto</Link>
                    </li>

                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                </ul>

                <div className={styles.box_drop}>

                    <div className={styles.dropdown}>
                        <button onClick={toggleMenu} className={styles.dropbtn}>
                            {!showMenuMobile ?
                            
                                <div className={styles.dropdown_box}>
                                    <h2> <GrClose /> </h2>

                                    <ul className={styles.dropdown_content}>

                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>

                                        <li>
                                            <Link to="/newProject">Novo Projeto</Link>
                                        </li>

                                        <li>
                                            <Link to="/projects">Projetos</Link>
                                        </li>

                                    </ul>
                                </div>
                                :
                                <div className={styles.dropdown_content_exit}>
                                    <strong><GiHamburgerMenu /> </strong>
                                </div>
                            }
                        </button>

                    </div>
                </div>





                {/* <div className={styles.dropdown}>
                    <strong>MENU <GiHamburgerMenu /> </strong>
                    <ul className={styles.dropdown_content}>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/newProject">Novo Projeto</Link>
                        </li>

                        <li>
                            <Link to="/projects">Projetos</Link>
                        </li>

                    </ul>
                </div> */}



            </Container>


        </nav>

    );
}