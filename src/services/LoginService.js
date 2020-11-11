import Axios from "axios"

const URL = 'http://localhost:5000'

class LoginService{
    async login(data){
        return await Axios.post(URL+'/api/login',data,)}
    async logout(){
        await Axios.post(URL+'/api/logout').then(() => {
            localStorage.removeItem("token");
          }).catch(err => console.log(err))
        return true
    }
    async register(data) {
        return Axios.post(URL + "/api/register", data);
      }
    
    async getCurrentUser() {
        return JSON.parse(localStorage.getItem('token'));;
      }
}

export default LoginService