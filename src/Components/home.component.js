import React, {Component} from 'react';
import axios from 'axios';
export default class Home extends Component {
    state = {};

    componentDidMount() {
        const config = {
            Headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')

            }
        };
        axios.get('user', config).then(
            res => {
                this.setState({
                })
            },
            err => {
                console.log(err) 
            }
        )
    }

    render() {
        return (
            <div>
            <div className="form-group">
            <label>Email</label>

            <input type="company eamil" className="form-control" placeholder=" Company.com" onChange={e=> this.email = e.target.value}/>
             <button className="home-btn">Check</button>
            </div>
            </div>
            
           
        )  
    }
}
    
    
     