// import express from 'express'
import Router from 'express'
import {createUser} from '../controllers/user.controller.js';

const userRouter = Router()


userRouter.post('/createUser',createUser)


export default userRouter;