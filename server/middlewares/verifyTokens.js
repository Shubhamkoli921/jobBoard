const jwt = require('jwt')
const {json} = require('body-parser')

function verifyToken (req,res,next){
    const token = req.headers['authorization']
    if(!token){
        return res.status(403).json({message:'A token is required for authentication'})
    }
    jwt.verify(token,'1F76961362D832146966AEEFE7C8CEB06BE3A9BEFD40B2707FBCEC32E436BB44',(err,decoded)=>{
        if(err){
            res.status(401).json({message:"Invalid Token"})
        }
        req.username = decoded.username;
        next()
    })

}


module.exports = verifyToken