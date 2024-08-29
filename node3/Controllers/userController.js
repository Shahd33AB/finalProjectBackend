const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        return res.status(201).json(user); 
    } catch (err) {
        console.error('Error creating user:', err); 
        return res.status(500).json({ message: 'Internal server error' }); 
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users); 
    } catch (err) {
        console.error('Error fetching users:', err); 
        return res.status(500).json({ message: 'Internal server error' }); 
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Email not found' }); 
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password not correct' }); 
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.secret_key,
            { expiresIn: '1h' }
        );
        return res.status(200).json({ token }); 
    } catch (err) {
        console.error('Login error:', err); 
        return res.status(500).json({ message: 'Internal server error' }); 
    }
};

