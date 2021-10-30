class HttpReponse {
    constructor(){
        if (new.target === "HttpReponse") {
            throw new TypeError("HttpResponse is an abstract class and need to be used as heritance from child class.");
        }
    }
    response(code, body){
        return {
            statusCode: code,
            body
        }
    }
    badRequest(message){
        return this.response(400, {message})
    }
    internalError(message){
        return this.response(500, {message})
    }
}

module.exports = HttpReponse;
