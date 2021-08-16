import React, {Component} from 'react';
import axios from 'axios';
import  {useState} from 'react';




export default class Register extends Component {


    handleSubmit = e => {
        e.preventDefault();

        const data = {
            first_name: this.firstName,
            last_name: this.lasttName,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword,
        }
       
        axios.post('register', data).then(
            res =>
            console.log(res)
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>

                    <input type="text" className="form-control" placeholder="First Name"

                    onChange={e=> this.firstName = e.target.value} />

                </div>

                <div className="form-group">
                    <label>Last Name</label>

                    <input type="text" className="form-control" placeholder="Last Name" onChange={e=> this.lasttName = e.target.value}/>

                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input type="email" className="form-control" placeholder="Email" onChange={e=> this.email = e.target.value}/>

                </div>

                <div className="form-group">
                    <label>Password</label>

                    <input type="password" className="form-control" placeholder="Password" onChange={e=> this.password = e.target.value}/>
 
                </div>

                <div className="form-group">
                    <label>Comfirm password</label>

                    <input type="password" className="form-control" placeholder="Comfirm Password" onChange={e=> this.comfirmpassword = e.target.value}/>

                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>

        )
    }
}