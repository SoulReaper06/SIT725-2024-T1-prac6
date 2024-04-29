const Pet = require('../models/pet');

exports.submitPet = async (req, res) => {
  const newPet = new Pet({
    petName: req.body.pet_name,
    description: req.body.description,
    imageUrl: req.body.imageurl
  });

  try {
    const savedPet = await newPet.save();
    console.log('Pet saved successfully:', savedPet);
    res.status(200).json({ message: 'Success', pet: savedPet }); 
  } catch (err) {
    console.error('Error saving pet:', err);
    res.status(500).json({ error: 'Error saving Pet to database' }); 
  }
};

exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (err) {
        console.error('Error fetching pets:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
