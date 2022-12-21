import Api from './Api'

function getCsrfCookie(){
    return Api.get('/csrf-cookie')
}

export default getCsrfCookie