const jwt=require('jsonwebtoken')
const authMiddleware=(req,res,next)=>{
    // const authHeader=req.header['authoraization']
    const token=req.header("authorization")?.replace('Bearer ','')
    if(!token){
        return res.status(401).json({error:'Access denied' })
    }
    try{
        // const secret_key="Sgqh*;g>e5P|,'sR,^s$YLSLBld3f6Y4Hq9H5t>W7S3rL8QhVsm}NZ.%Mc:KSxc"
        const verified=jwt.verify(token,process.env.secret_key)
        req.user=verified;
        next()
    }
    catch(err){
        res.status(400).send(err.message)
    }
}

module.exports=authMiddleware