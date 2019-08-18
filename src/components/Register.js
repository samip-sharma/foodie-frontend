import React from 'react';


export default class Register extends React.Component{
    
    state = {
        name: '',
        user_name: '',
        password: ''
    }


    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/users`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then((data)=>{
            if (!data.errors){
                localStorage.setItem('token', data.token) 
                localStorage.user_id = data.user_id
                this.props.history.push('/')
            }
        })
        
    }

    render(){
        return(
            <React.Fragment >
                <form onSubmit={ this.handleSubmit }>
                <input onChange={ this.handleInputChange } value={ this.state.name } type="text" placeholder="name" name="name"/>
                <input onChange={ this.handleInputChange } value={ this.state.user_name } type="text" placeholder="user name" name="user_name"/>
                <input onChange={ this.handleInputChange } value={ this.state.password }  type="password" placeholder="password" name="password"/>
                <input type="submit" value="submit"/>
                </form>
            </React.Fragment>
        )

    }
}