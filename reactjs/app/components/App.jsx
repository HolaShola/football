import React, { Component } from 'react';
import CustomForm from './Form.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/stocks/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    articles: data
                })
            })
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
                <CustomForm />
            </div>
        )
    }
}

export default App;