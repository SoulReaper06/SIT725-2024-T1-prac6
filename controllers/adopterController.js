const Adopter = require('../models/adopter');

exports.submitAdopter = async (req, res) => {
  const newAdopter = new Adopter({
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    mobileNumber: req.body.number,
    email: req.body.email,
    address: req.body.address,
  });

  try {
    const savedAdopter = await newAdopter.save();
    console.log('Adopter saved successfully:', savedAdopter);
    res.status(200).json({ message: 'Success', adopter: savedAdopter }); 
  } catch (err) {
    console.error('Error saving adopter:', err);
    res.status(500).json({ error: 'Error saving Adopter to database' }); 
  }
};
