import React from 'react';

import FormInput from "../../components/form-input/form-input.component";
import './sign-in.styles.scss';

import CustomButton from "../../components/custom-button/custom-button.component.jsx";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {

        const { value, name } = event.target;

        this.setState({ [name]: value })  //Dynamically setting the property value

    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        required />

                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        required />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;