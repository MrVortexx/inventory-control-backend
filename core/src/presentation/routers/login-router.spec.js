class LoginRouter {
    async route(httpRequest){
        const {password, email} = httpRequest;
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
    test('Should return 400 if  email or password is not provided', async () => {
        const loginRouter = new LoginRouter();
        const httpRequest = {

        }
        const response = await loginRouter.route(httpRequest);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email or password is not provided.");
        
    });
})
