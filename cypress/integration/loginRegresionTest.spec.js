import userApi from "../api/user"

describe('happy', () => {
    let userToken
    before(() => {
        userApi.login({testMessage: "Login before tests"}).then((token) => {
        userToken =token
        })
    })
    
    it('email without @', () => {
        userApi.login({email:"nistatest.com", testMessage: "Wrong email withot @", statusCode: 401})
     });

     it('email without dot', () => {
        userApi.login({email:"nistatest@com", testMessage: "Wrong email withot @", statusCode: 401})
      });

      it('wrong pass', () => {
        userApi.login({password:"pass", testMessage: "Wrong email withot @", statusCode: 401})
      });
});