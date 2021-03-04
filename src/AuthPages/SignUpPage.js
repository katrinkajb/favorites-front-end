import React, { Component } from 'react';
import '../App.css'; 
import { signUpUser } from '../utils/api-utils.js';


export default class SignUpPage extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    handleSubmit = async e => {
        e.preventDefault();

        const user = await signUpUser(this.state.name, this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/favorites');
    }

    render() {
        return (
            <div className='container'>
                <h2>Signup Page</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password
                        <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
