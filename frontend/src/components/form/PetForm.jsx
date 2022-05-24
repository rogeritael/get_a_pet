import { useState } from 'react';
import Input from './Input';
import formStyles from './Form.module.css';
import Select from './Select';

function PetForm(petData, handleSubmit){
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const colors = ['Branco', 'Preto', 'Cinza','Caramelo','Mesclado'];

    function onFileChange(e){
        setPet({...pet, images: [...e.target.files]});
        setPreview(Array.from(e.target.files));
    }

    function handleChange(e){
        setPet({ ...pet, [e.target.name]: e.target.value });
    }

    function handleColor(e){
        setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text })
    }

    function submit(e){
        e.preventDefault();
        console.log(pet)
        // handleSubmit(pet);
    }


    return(
        <form className={formStyles.form_container} onSubmit={submit }>
            <div className={formStyles.preview_pet_images}>
                {preview.length > 0 ?
                    preview.map((image, index) => (
                       <img src={URL.createObjectURL(image)} alt={pet.name} key={`${pet.name}+${index}`} />      
                )) :
                    pet.images &&
                    pet.images.map((image, index) => {
                        <img src={`${process.env.REACT_APP_API}/images/pets/${image}`} alt={pet.name} key={`${pet.name}+${index}`} />
                    })
                }
            </div>
            <Input
                text="Imagens do Pet"
                type="file"
                name="images"
                multiple={true}
                handleOnChange={onFileChange}
            />
            <Input
                text="Nome do Pet"
                type="text"
                name="name"
                placeholder="Digite o nome"
                value={pet.name || ''}
                handleOnChange={handleChange}
            />
            <Input
                text="Idade do Pet"
                type="text"
                name="age"
                placeholder="Digite a idade"
                value={pet.age || ''}
                handleOnChange={handleChange}
            />
            <Input
                text="Peso do Pet"
                type="text"
                name="weight"
                placeholder="Digite o peso"
                value={pet.weight || ''}
                handleOnChange={handleChange}
            />
            <Select
                name="color"
                text="Celecione a cor"
                options={colors}
                value={pet.color || ''}
                handleOnChange={handleColor}
            />
            <input type="submit" value='Cadastrar Pet' />
        </form>
    )
}

export default PetForm;