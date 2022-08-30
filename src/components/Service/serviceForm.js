import React, { useState } from 'react';

import styles from '../ProjectForm/projectForm.module.css'

import Input from '../Form/inputForm';
import SubmitButton from '../Form/submitButton';



export default function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState([])

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    
    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input maxlength="10"
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do Serviço"
                handleOnChange={handleChange}
            />

            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor Total"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o nome do Serviço"
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnText} />
        </form>
    );
}