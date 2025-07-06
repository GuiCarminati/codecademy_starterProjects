
function createError(message,code=500) {
    const err = new Error(message);
    err.status = code;
    return err;
}

function setType(req,res,next){
    // gets the last word from baseUrl and sets it as type
    // for example, in "/api/minions" or "/api/minions/", type="minions"
    const match = req.baseUrl.match(/([^/]+)\/*$/);
    const type = match ? match[1] : null;  
    if(type) {
        req.type = type;
        next();
    } else {
        createError('Invalid route');
    }
}

module.exports = {
    createError,
    setType
}