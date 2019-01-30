import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleClickAuth = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(actions.authLogin(this.state.username, this.state.password))
    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div className="auth">
                <form action="">
                    <div className="auth_password">
                        <input
                          type="text"
                          placeholder="Username"
                          onChange={this.handleChangeUsername}  
                        />
                    </div>
                    <div className="auth_pass">
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChangePassword}
                      />
                    </div>
                    <div className="auth_in">
                      <input
                        type="submit"
                        value="Sign in"
                        onClick={this.handleClickAuth}
                      />
                    </div>
                </form>
                <div className="create_account">
                    <Link to="/account"><p>Create Account</p></Link>
                </div>
            </div>
        );
    }  
};

function mapStateToProps(state) {
    return {
        isLoading: state.auth.loading,
        token: state.auth.token,
    };
}

export default connect(mapStateToProps)(LoginPage);
