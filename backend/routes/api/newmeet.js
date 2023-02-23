const express = require('express');
const router = express.Router();

const meet = require('../../models/useSchema');

import express from "express";
import { 
    getUsers, 
    saveUser,
    updateUser,
} from "../controllers/UserController.js";
 

 
router.get('/users', getUsers);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);

 
export default router;
