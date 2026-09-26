const User = require('../models/userModel')
const { ensureDatabace } = require('../config/db.mongo');

// Controllers are the application layer between routes and models. These
// functions are currently placeholders; each should eventually check the DB,
// perform a User query, and send an HTTP response.
//get/api/users
const getAllUsers = async (req, res, next) => { }
//post/api/users
const createUser = async (req, res, next) => { }

const getUserById = async (req, res, next) => { }

const updateUserById = async (req, res, next) => { }

const detetUserById = async (req, res, next) => { }


module.exports = {
    getAllUsers,
    createUser,
    updateUserById,
    detetUserById,
    getUserById
}

