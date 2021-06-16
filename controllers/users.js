import { uuid } from 'uuidv4';

let users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 26
    }
]

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const newUser = req.body;

    users.push({id: uuid(), ...newUser});

    res.send(`User, ${newUser.firstName} was successfully created`)
}

export const retrieveUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.filter(user => user.id == id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id == id);

    res.send(users);
}