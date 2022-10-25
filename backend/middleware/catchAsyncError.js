module.exports =(thenFunc) =>(req,res,next)=>{
    Promise.resolve(thenFunc(req,res,next)).catch(next);
};