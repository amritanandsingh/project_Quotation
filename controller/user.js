const User = require("../model/user");


// controller action to create user
module.exports.signUp = async (req, res) => {
    try{
        // 1-> fetch user details from req.body object
        // const name = req.body.name;
        // const email = req.body.email;
        // const password = req.body.password;
        // const confirmPassword = req.body.confirmPassword;

        const { name, email, password, confirmPassword } = req.body;

        // 2-> match password and confirmPassword
             // a-> if not same then send failed response
             if(password !== confirmPassword){
                return res.status(400).json({
                    message: "Password and confirm password do not match!",
                    data: {}
                })
            }
        
        // 3-> check whether any user exist with the email or not
        // 3.a-> if user exist by that email then it will return ab object with all the user information in it.
        // 3.b-> if user do not exist then it will return null
        const existingUser = await User.findOne({email});
        
            // a-> if exists then send failed response
            // a.1-> if({}) -> is consider as true
            // b.1-> if(null) -> is consider as false
            if(existingUser){
                return res.status(400).json({
                    message: "User already exists!",
                    data: {},
                })
            }
        
        // 4-> Store user details into User Model
        const user = await User.create({
            name,
            email,
            password,
        });

        // 5-> send success response
        return res.status(200).json({
            message: "Successfully created the acount!",
            data: {
                user,
            }
        })
    }catch(error){
        // handle the error
        return res.status(500).json({
            message: "Opps something went wrong at the server!",
            data: {
                error,
            }
        })
    }
}
module.exports.test = (req,res) =>{
    res.send("hello");
}

module.exports.signIn = async (req,res)=>{
    const {  email, password} = req.body;
    const existingUser = await User.findOne(email);
    try{
        
        if(existingUser)
        {
            if(existingUser.password===password)
            {
                return res.status(200).json({
                    message:"logged in"
                });
            }
            else{
                return res.status(200).json({
                    message:"password is wrong"
                });
            }
        }   
        else{
            return res.status(400).json({
                message:"email not exist" 
            });
        }   
    }
    catch{
        return res.status(500).json({
            message: "Opps something went wrong at the server!",
            data: {
                error,
            }
        })
    }
}