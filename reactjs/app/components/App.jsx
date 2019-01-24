import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomForm from './Form.jsx';
import * as actions from '../actions/auth';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    
    componentDidMount() {
        // fetch("http://localhost:8000/stocks/")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             articles: data
        //         })
        //     })
        this.props.onTryAutoSignup();
    }

    getDataMethod() {
        this.props.getDataAction();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.articles.map(article => <li>{article.ticker} - {article.volume}</li>)}
                </ul>
                <CustomForm {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.token != null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);