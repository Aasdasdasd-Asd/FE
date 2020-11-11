import Axios from "axios";
import authHeader from './Header'

class BlogService{
    url = 'http://localhost:5000/'
    async index(){
        return await Axios.get(this.url+'api/', { headers: authHeader() })
    }

    async store(data){
        Axios.post(this.url+'api/create',data, { headers: authHeader() })
    }

    async show(id){
        return await Axios.get(this.url+'api/show/'+id , { headers: authHeader() })
    }

    async update(data){
        await Axios.put(this.url+'api/update', data, { headers: authHeader() })
    }

    async delete(id){
        await Axios.delete(this.url+'api/delete/'+id, { headers: authHeader() })
    }

    async search(title){
        return await Axios.get(this.url+'api/search/'+title, { headers: authHeader() })
    }
}

export default BlogService;