import api from '../utils/api';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';

export default function useAuth(){
    const {setFlashMessage} = useFlashMessage();

    async function register(user){
        let msgText = 'Cadastro realizado com sucesso';
        let msgtype = 'success';

        try{
            const data = await api.post('/users/register', user)
            .then((response) => {
                return response.data;
            });

            console.log(data);
        }catch(error){
            msgText = error.response.data.message;
            msgtype = 'error';
        }

        setFlashMessage(msgText, msgtype);
    }

    return {register}
}