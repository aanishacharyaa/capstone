const jwt = require('jsonwebtoken');

const auth_middlewear = async (req,res,next)=>{

//    console.log("auth middleware called")
    try {
        const token = req.header('x-auth-token')
        if(!token) 
        return res.status(401).json({msg: "No auth toekn! Access denied!"})

        const verified = jwt.verify(token,"passwordkey")
        if(!verified)
        return res.status(401).json({msg: "Token verification failed! Authorization denied!"})

        req.user =verified.id 
        req.token = token
        next()
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}


module.exports = auth_middlewear;