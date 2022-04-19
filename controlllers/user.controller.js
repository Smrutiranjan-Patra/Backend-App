const databased = require('../models/index');

const User = databased.users;


// create users

const adduser = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        }
        console.log(data);
        const newuser = await User.create(data);
        res.status(200).send(newuser);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

// getAlluser

const getalluser = async (req, res) => {
    try {

        let users = await User.findAll({});
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

// getoneuser

const getoneuser = async (req, res) => {
    try {
        let id = req.params.id;
        const users = await User.findOne({ where: { id: id } });
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}


// Update a user

const updateauser = async (req, res) => {
    try {
        let id = req.params.id;
        const updateduser = await User.update(req.body, { where: { id: id } })
        res.status(200).send("User Updated Successfully");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Delete a user

const deleteauser = async (req, res) => {
    try {
        let id = req.params.id;
        const deleteduser = await User.destroy({ where: { id: id } })
        res.status(200).send("User Deleted Successfully")
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports = { adduser, getalluser, getoneuser, updateauser, deleteauser }