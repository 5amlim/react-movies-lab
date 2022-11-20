import { Component } from "react";

export default class LoginForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        alert(JSON.stringify(this.state))
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: '',
        })
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return <div>
                    <div className="form-container">
                        <form autoComplete="false" onSubmit={this.handleSubmit}>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                            <label>Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            <label>Confirm</label>
                            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
                            <button type="submit" disabled={disable}>Log In</button>
                        </form>
                    </div>
                    <p className="error-message">&nbsp;{this.state.error}</p>

                </div>
    }
}