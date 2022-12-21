import Api from './Api'
import getCsrfCookie from './Csrf'

export default {
    async register(form){
        await getCsrfCookie();
        return Api.post('/register',form)
    },
    async login(form){
        await getCsrfCookie();
        return Api.post('/login',form)
    },
    async getUser(){
        return Api.get("/user")
    },

    async logout(){
        await getCsrfCookie()
        return Api.post("/logout")
    }

}