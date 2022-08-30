import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './projects.module.css';

import Message from '../../components/Layout/message.js';
import Container from '../../components/Layout/container.js';
import Loading from '../../components/Layout/loading.js'
import LinkButton from '../../components/LinkButton/linkButton.js'
import ProjectCard from '../Projects/projectCard.js'

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState (false)
  const [projectMessage, setProjectMessage] = useState('')


  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'applications/json',
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    }, 1000)

  }, [])

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      //message
      setProjectMessage("Projeto removido com sucesso")
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container} >
        <h2>Meus Projetos</h2>
        <LinkButton to="/newproject" text="Criar Projeto" />
        {/* <a href='#'>Novo Projeto</a> */}
      </div>
      {message && <Message msg={message} type="sucess" />}
      {projectMessage && <Message msg={projectMessage} type="sucess" />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}

          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há Projetos cadastrados</p>
          )}
      </Container>
    </div>
  );
}