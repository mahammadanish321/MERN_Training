import User from '../model/user.model.js'

//create user/
const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = new User({
            name,
            email,
            password
        })
        await user.save();
        res.status(201).json({ success: true, data: user });
    }catch(err){
        console.error(`there is a error apper which is ${err.message}`);
    }
}



export {createUser};