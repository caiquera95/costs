import React from 'react';
import styles from './footer.module.css';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer} >
            <ul className={styles.social_list} >
                <li>
                    <a href="https://github.com/caiquera95" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </li>

                <li>
                    <a href="https://www.instagram.com/caiqueera95/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/caique-antonio1195/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </li>
            </ul>

            <p className={styles.copy_right} >
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    );
}