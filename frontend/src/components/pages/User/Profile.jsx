import {useState, useEffect} from 'react';

import styles from './Profile.module.css';
import formStyles from '../../form/Form.module.css';

import {Input} from '../../form/Input';

export function Profile(){
    const [user, setUser] = useState({});

    function onFileChange(e){

    }

    function handleChange(e){

    }

    return(
        <section>
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                <p>preview de imagem</p>
            </div>
            <form className={formStyles.form_container}>
                <Input
                    text="Imagem"
                    type="file"
                    name="image"
                    handleOnChange={onFileChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    value={user.email || ''}
                    handleOnChange={handleChange}
                />
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    value={user.name || ''}
                    handleOnChange={handleChange}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    value={user.phone || ''}
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Editar" />
            </form>
        </section>
    )
}