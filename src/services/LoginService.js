import Axios from "axios"

class LoginService{
    URL = 'http://localhost:5000'

    async login(data){
        return await Axios.post(this.URL+'/api/login',data,).then(result => {
              console.log(result);
          }).catch(err => console.log(err))
    }
}

export default LoginService