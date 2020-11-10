import React from 'react'
import './createOrEdit.css'

export default class CreateOrEdit extends React.Component{
    // state = {
    //     showModal : this.props.showModal,
    //     edit : {
    //         id: this.props.edit.id,
    //         title: this.props.edit.title,
    //         content: this.props.edit.content
    //     }
    // }

    constructor(props) {
        super(props)
        this.state = {
            showModal : this.props.showModal,
            edit : {
                id: this.props.edit.id,
                title: this.props.edit.title,
                content: this.props.edit.content
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount(){
        this.setState({
            edit : {
                id: this.props.edit.id,
                title: this.props.edit.title,
                content: this.props.edit.content
            }
        })
    }

    close(){
        this.props.close()
        this.setState({
            edit: {}
        })
    }

    save(){        
        this.props.save(this.state.edit)
        this.close()
    }
    handleChange(event) { 
        this.setState({
            edit:{
                ...this.state.edit,
               [ event.target.name]: event.target.value
            }
          });
      }
    
    render(){        
        let showModal = 'none'
        if(this.props.showModal){
            showModal = 'block'
        }        
        return(
            <div style={{ display  : showModal}} id="myModal" className="modal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title">Create New</h5>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <label className='col-2 label'>Title</label>
                                    <input className='col-8' placeholder='Title' name='title' value={this.state.edit.title} onChange={this.handleChange}></input>
                                </div>
                                <div className='row'>
                                    <label className='col-2 label'>Content</label>
                                    <textarea className='col-8' placeholder='Content' name='content' value={this.state.edit.content} onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.close}>Close</button>
                                <button type="button" onClick={this.save}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
 }