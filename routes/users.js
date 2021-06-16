import express from "express";
import {getUsers, createUser, retrieveUser, deleteUser} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', retrieveUser);

router.delete('/:id', deleteUser);

export default router;