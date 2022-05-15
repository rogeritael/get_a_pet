const Pet = require('../models/Pet');

const getUserByToken = require('../helpers/get-user-by-token');

class PetController {
    static async create(req, res){
        const { name, age, weight, color } = req.body;
        const available = true;
        
        // images upload

        // validation
        if(!name){
            res.status(422).json({ message: 'O nome é obrigatório' });
            return
        }

        if(!weight){
            res.status(422).json({ message: 'O peso é obrigatório' });
            return
        }

        if(!age){
            res.status(422).json({ message: 'A idade é obrigatória' });
            return
        }

        if(!color){
            res.status(422).json({ message: 'A cor é obrigatória' });
            return
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

        try {
            const newPet = await pet.save();
            res.status(201).json({ message: 'Pet cadastrado com sucesso', newPet });
        } catch (error) {
            res.status(500).json({ message: error });
        }
        
    }
}

module.exports = PetController;