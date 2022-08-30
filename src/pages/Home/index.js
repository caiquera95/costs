import React from 'react';

import styles from './home.module.css';
import imgSaving from '../../assets/savings.svg';
import LinkButton from '../../components/LinkButton/linkButton.js';
import Container from '../../components/Layout/container';

export default function Home() {
  return (
    <Container>
      <section className={styles.home_container} >
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newProject" text="Criar Projeto" />
        <img src={imgSaving} alt="costs" />
      </section>
    </Container>

  );
}