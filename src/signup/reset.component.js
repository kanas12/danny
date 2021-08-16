import React, {Component} from 'react';
 import axios from 'axios';
 export class Reset extends Component {

    handleSubmit = e => {
        e.preventDefault();
    } 

     constdata = {
         token:this.props.match.params.id,
         password:this.password,
         password_confirm:this.password_confirm
     };
    render() {       
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Reset Password</h3>


            <div className="form-group">
                <label>Password Comfirm</label>

                <input type="password" className="form-control" placeholder="Password Comfirm" onChange={e=> this.password = e.target.value}/>

            </div>

            <button className="btn btn-primary btn-block">Submit</button>
        </form>
        )
    }
 }