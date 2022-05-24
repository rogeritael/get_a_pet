import styles from './AddPet.module.css';
import api from '../../../utils/api';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';

import PetForm from '../../../components/form/PetForm';

function AddPet(){
    return(
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponivel para a adoção </p>
            </div>
            <PetForm />
        </section>
    )
}

export default AddPet;