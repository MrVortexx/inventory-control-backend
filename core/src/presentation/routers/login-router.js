const HttpReponse = require('../helpers/HttpResponse');

class LoginRouter extends HttpReponse{
    async route(httpRequest){

        if(!httpRequest || !httpRequest.body){
            return this.internalError("Internal error.")
        }
        const {password, email} = httpRequest.body;
        if(!password || !email){
            return this.badRequest("Email or password is not provided.");
        }
    }
}

module.exports =  LoginRouter;