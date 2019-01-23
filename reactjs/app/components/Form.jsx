import React from "react";
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comand_name: '',
            city: '',
            founded: '',
            manager: ''
        }
    }
    
    handleClickAuth = event => {
        event.preventDefault();
        fetch('http://localhost:8000/api/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": this.state.comand_name,
                "city": this.state.city,
                "founding_date": this.state.founded,
                "manager": this.state.manager    
            })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    
    handleChangeComandName = event => {
        this.setState({ comand_name: event.target.value })
    }

    handleChangeCityName = event => {
        this.setState({ city: event.target.value })
    }

    handleChangeFoundedDate = event => {
        this.setState({ founded: event.target.value })
    }

    handleChangeManager = event => {
        this.setState({ manager: event.target.value })
    }


    render() {
        return (
            <form action="">
                <div>
                    <input onChange={this.handleChangeComandName} />
                </div>
                <div>
                    <input onChange={this.handleChangeCityName} />
                </div>
                <div>
                    <input onChange={this.handleChangeFoundedDate} />
                </div>
                <div>
                    <input onChange={this.handleChangeManager} />
                </div>
                <div>
                    <input
                      type="submit"
                      value="Sign in"
                      onClick={this.handleClickAuth}
                    />
                  </div>
            </form>
        );
    }
}

export default CustomForm;