import React, { Component } from 'react';
import { reduxForm, Field, reset } from "redux-form";
import { connect } from 'react-redux';
import { signup } from '../../actions/index';

class Signup extends Component {

    onSubmit = (values) => {
        this.props.sign(values)
        this.props.reset();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <label>Email:</label><br />
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    /><br />
                    <label>Password:</label><br />
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    /><br />
                    <button >Sign Up</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset("signup")),
        sign: (val) => dispatch(signup(val))
    };
};

export default reduxForm({
    form: "signup"
})(connect(null, mapDispatchToProps)(Signup));