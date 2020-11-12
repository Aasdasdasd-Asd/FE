import React, {Component} from 'react'

import Search from './search'
import './index.css'
import CreateOrEdit from './createOrEdit';
import BlogService from '../../services/BlogService';

import { Button, Card, Container } from '@material-ui/core';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';

export default class Blog extends Component{
    service = new BlogService()
    constructor() {
        super()
        this.state ={
            data : [],
            showModal : false,
            dataEdit: {},
            titleSearch : '',
            page:1
        }
        this.index = this.index.bind(this)
        this.show = this.show.bind(this)
        this.create =  this.create.bind(this)
        this.searchByTitle =  this.searchByTitle.bind(this)
    }

    async index(){
        return await this.service.index().then((result) => {
                 return result.data.result;
            });
    }

    async store(data){
        return await this.service.store(data).then(async () => {
            this.index()
            this.componentDidMount()
        }).catch(err => { alert(err)})
    }

    async show(id){
        
        return await this.service.show(id).then((result) => {
            this.setState({
               data :  result.data.result
            })
        }).catch(err => { alert(err)})
    }

    async update(data){
        await this.service.update(data).then(async () => {
            this.componentDidMount()
            this.searchByTitle(this.state.titleSearch)
        }).catch(err => { alert(err)})
    }

    async delete(id){
        if(window.confirm("Are you want to delete the Post?")){
            await this.service.delete(id).then(async () => {
                this.searchByTitle(this.state.titleSearch)
            }).catch(err => { alert(err)})
        }
    }

    async search(title){
        return await this.service.search(title).then((result) => {
            this.setState({
               data :  result.data.result
            })
        }).catch(err => { alert(err)})
    }

    async componentDidMount(){     
        this.setState({
            data : await this.index(this.state.page)
        })
    }

    searchByTitle = (title) => {
        console.log(title);
        if(title.length>0){
            this.search(title)
        } else{
            this.componentDidMount()
        }
        this.setState({
            titleSearch : title
        })
    }

    create(){
        this.setState({
            showModal : true
        })
    }
    
    edit(row){
        this.setState({
            showModal : true,
            dataEdit: row
        })
    }
    save = (edit,content) =>{      
        edit.content = content
        if(edit.id){
            this.update(edit)
        } else {
            this.store(edit)
        }
    }
    handleChangePage(event, value){
        this.setState({
            page: value
        })
    }


    render(){  
        return(
            <Container maxWidth="xl" id='blog'>
            <Card>
            <div >
                <div className='top row' >
                    <Button style={{'width' : '8rem','height' : '2rem' ,'margin' : '55px' }} onClick={this.create} variant="contained" color="primary">Create new</Button>
                    <div id='search'>
                        <Search titleSearch={this.searchByTitle}></Search>
                    </div>
                </div>
                <Table>
                <TableHead>
                <TableRow>
                    <TableCell>
                    id
                    </TableCell>
                    <TableCell>
                    Title
                    </TableCell>
                    <TableCell>
                    Content
                    </TableCell>
                    <TableCell>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.data.map((customer) => (
                    <TableRow
                    hover
                    key={customer.id}
                    >
                    <TableCell>
                        {customer.id}
                    </TableCell>
                    <TableCell>
                        {customer.title}
                    </TableCell>
                    <TableCell>
                        {customer.content}
                    </TableCell>
                    <TableCell align={"right"}>
                        <Button onClick={() => this.edit(customer)} color="primary">Edit</Button>
                        {/* <Button variant="contained" color="primary" onClick={() => this.edit(row)}>
                        Edit
                        </Button> */}
                        <Button onClick={() => this.delete(customer.id)} color="primary">Delete</Button>
                        {/* <Button variant="contained" color="primary" >
                        Delete
                        </Button> */}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
                    {
                        this.state.showModal? <CreateOrEdit 
                        showModal={this.state.showModal}
                        close = {() =>
                            this.setState({
                                showModal: false,
                                dataEdit : {}
                            })
                        }
                        edit={this.state.dataEdit}
                        save = {this.save}
                        >
                        </CreateOrEdit>
                        : null
                    }
        </div>
        {/* <Pagination count={10} page={this.state.page} onChange={this.handleChangePage} /> */}
            </Card>
            </Container>
        )
    }
}