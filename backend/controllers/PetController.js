const Pet = require('../models/Pet');

const getUserByToken = require('../helpers/get-user-by-token');
const ObjectId = require('mongoose').Types.ObjectId;

class PetController {
    static async create(req, res){
        const { name, age, weight, color } = req.body;
        const images = req.files;
        const available = true;
        
        // images upload

        // validation
        if(!name){
            res.status(422).json({ message: 'O nome é obrigatório' });
            return;
        }

        if(!weight){
            res.status(422).json({ message: 'O peso é obrigatório' });
            return;
        }

        if(!age){
            res.status(422).json({ message: 'A idade é obrigatória' });
            return;
        }

        if(!color){
            res.status(422).json({ message: 'A cor é obrigatória' });
            return;
        }

        if(images.length === 0){
            res.status(422).json({ message: 'A imagem é obrigatória' });
            return;
        }

        //pet owner
        const token = req.headers['x-access-token'];
        const user = await getUserByToken(token);

        const pet = new Pet({
            name, weight, age, color, available,
            images: [],
            user: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone
            }
        });

        images.map((image) => {
            pet.images.push(image.filename);
        })

        try {
            const newPet = await pet.save();
            res.status(201).json({ message: 'Pet cadastrado com sucesso', newPet });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async getAll(req , res){
        const pets = await Pet.find().sort('-createdAt');
        res.status(200).json({ pets: pets })
    }

    static async getAllUserPets(req, res){
        const token = req.headers['x-access-token'];
        const user = await getUserByToken(token);

        const pets = await Pet.find({ 'user._id': user._id }).sort('-createdAt');

        res.status(200).json({ pets });
    }

    static async getAllUserAdoptions(req, res){
        const token = req.headers['x-access-token'];
        const user = await getUserByToken(token);

        const pets = await Pet.find({ 'adopter._id': user._id }).sort('-createdAt');

        res.status(200).json({ pets });
    }

    static async getPetById(req, res){
        const { id } = req.params;
        if(!ObjectId.isValid(id)){
            res.status(422).json({ message: 'Id inválido' });
            return;
        }

        const pet = await Pet.findOne({ _id: id });

        if(!pet){
            res.status(422).json({ message: 'Pet não encontrado' });
        }

        res.status({ pet: pet });
    }

    static async removePetById(req, res){
        const { id } = req.params
        
        if(!ObjectId.isValid(id)){
            res.status(422).json({ message: 'Id inválido' });
            return;
        };

        const pet = await Pet.findOne({ _id: id });
        if(!pet){
            res.status(404).json({ message: 'Pet não encontrado' });
        }

        const token = req.headers['x-access-token'];
        const user = await getUserByToken(token);

        if(pet.user._id.toString() !== user._id.toString()){
            res.status(422).json({ message: 'Houve um problema em precessar a sua solicitação. Tente novamente mais tarde' });

        }

        await Pet.findByIdAndRemove(id);
        res.status(200).json({ message: 'Pet removido com sucesso' });
        
    }
}

module.exports = PetController;