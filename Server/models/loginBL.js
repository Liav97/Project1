const user = require("../models/userModel");

const loginVerify = function(us, pas)
{
    return new Promise((resolve, reject) =>
    {
        user.findOne({username : us}, function(err, data)
        {

            if(err)
            {
                reject(err)
            }
            else
            {
                if((data["username"] == us )&&( data["password"] == pas))
                {
                    resolve(true)
                }
                else
                {
                    resolve(false)
                }
            }
        })
    })
}

module.exports = {loginVerify}