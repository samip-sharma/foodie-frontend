import React from 'react'

export default class Login extends React.Component{
    
    state = {
        user_name: '',
        password: ''
    }


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://flatiron-foodie.herokuapp.com/tokens`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response=>response.json())
        .then((data) => {
            if (!data.errors){
                localStorage.user_id=data.user_id
                localStorage.clickedUser = data.user_id
                localStorage.token=data.token
                this.props.history.push("/home")
            }
        })
    }

    handleRegisterClick = () => {
        this.props.history.push("/register")
    }

    render(){
        if(localStorage.token){
            this.props.history.push("/home") 
        }

        return(
            <div className="login-page">
                <img src="images/foodie-logo.png" />
                <form onSubmit={ this.handleSubmit }>
                <input onChange={ this.handleInputChange } value={ this.state.user_name } type="text" placeholder="User Name" name="user_name"/>
                <br></br><br></br>
                <input onChange={ this.handleInputChange } value={ this.state.password }  type="password" placeholder="Password" name="password"/>
                <br></br><br></br>
                <input type="submit" value="submit"/>
                </form>
                <br></br>
                <button onClick={ this.handleRegisterClick }>Register</button>
            </div>
        )
    }
}