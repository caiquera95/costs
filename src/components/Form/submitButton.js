import React from 'react';

import styles from './submitButton.module.css';

export default function SubmitButton({text }) {
 return (
   <div className='btns'>
    <button className={styles.btn}>{text}</button>
   </div>
 );
}