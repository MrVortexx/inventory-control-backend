class LoginRouter {
    async route(httpRequest){

        if(!httpRequest || !httpRequest.body){
            return this.response(500, {message: "Internal error."})
        }
        const {password, email} = httpRequest.body;
        if(!password || !email){
            return this.response(400, {message: "Email or password is not provided."})
        }
    }

    response(code, body){
        return {
            statusCode: code,
            body
        }
    }
}

describe('Login router', () => {
    test('Should return 500 if httpRequest has not body.', async () => {
        const loginRouter = new LoginRouter();
        const response = await loginRouter.route();

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe("Internal error.");
    });

    test('Should return 400 if  email or password is not provided', async () => {
        const loginRouter = new LoginRouter();
        const httpRequest = {
            body:{
                
            }
        }
        const response = await loginRouter.route(httpRequest);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email or password is not provided.");
    });
    
})
