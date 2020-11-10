import Axios from "axios";
import authHeader from './Header'

class BlogService{
    url = 'http://localhost:5000/'
    async index(){
        return await Axios.get(this.url+'api/')
    }

    async store(data){
        Axios.post(this.url+'api/create',data)
    }

    async show(id){
        return await Axios.get(this.url+'api/show/'+id)
    }

    async update(data){
        await Axios.put(this.url+'api/update', data)
    }

    async delete(id){
        await Axios.delete(this.url+'api/delete/'+id)
    }

    async search(title){
        return await Axios.get(this.url+'api/search/'+title)
    }
}

export default BlogService;