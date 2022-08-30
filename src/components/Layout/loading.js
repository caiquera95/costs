import React from 'react';

import styles from './loading.module.css';

import loading from '../../assets/loading.svg'

export default function Layout() {
 return (
   <div className={styles.loader_container}>
    <img className={styles.loader} src={loading}/>
   </div>
 );
}