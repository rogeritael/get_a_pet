import formStyles from '../../form/Form.module.css';
import styles from './Profile.module.css';
import Input from '../../form/Input';
import {useState, useEffect} from 'react';

function Profile(){
    const [user, setUser] = useState({})

    function onFileChange(){

    }

    function onChange(){

    }

    return(
        <section>
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                <p>Preview de imagem</p>
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
                handleOnChange={onChange}
            />

            <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                value={user.name || ''}
                handleOnChange={onChange}
            />

            <Input
                text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite o seu telefone"
                value={user.phone || ''}
                handleOnChange={onChange}
            />

            <Input
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite a sua senha"
                handleOnChange={onChange}
            />                  
            <Input
                text=" Confirmação de senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme a sua senha"
                handleOnChange={onChange}
            />

            <input type="submit" value="editar" />
            </form>
        </section>
    );
}

export default Profile;