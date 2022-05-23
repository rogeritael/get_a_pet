import {useState, useContext} from 'react';
import Input from '../../form/Input';
import { Link } from 'react-router-dom';

import styles from '../../form/Form.module.css';

import { Context } from '../../../context/UserContext';

function Login(){
    function handleChange(){

    }

    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form>
                <Input
                    text='E-mail'
                    type='email'
                    name='email'
                    placeholder='Digite o seu e-mail'
                    handleOnChange={handleChange}
                />
                <Input
                    text='Senha'
                    type='password'
                    name='password'
                    placeholder='Digite a sua senha'
                    handleOnChange={handleChange}
                />
                <input type="submit" value="entrar"/>
            </form>
            <p>
                Não tem conta? <Link to="/register">crie agora</Link>
            </p>
        </section>
    );
}

export default Login;