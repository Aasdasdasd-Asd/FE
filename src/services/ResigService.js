import Axios from "axios";

class ResigService {
    URL = '127.0.0.1:5000'

    async resigter(data) {
        return await Axios.post(this.URL+'/api/resig',data)
    } 
}