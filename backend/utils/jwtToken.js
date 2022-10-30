// Creating Token and  saving cookie


const sendToken =(user,statusCode,res)=>
{
    const token =user.getJWTToken();

    //options for cookies

    const options ={
        expires: new Date(
            Date.now()+process.env.COOKIE_EXIPRE * 24 * 24 * 60 * 60 *1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token",token,options).json({
        sucess:true,
        user,
        token,
    });

};

module.exports =sendToken;