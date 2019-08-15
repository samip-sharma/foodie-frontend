import React from 'react'

export default class Login extends React.Component{
    state={
        user_name:'',
        password:'',
    }


    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <form>
                <input onChange={this.handleInputChange} value={this.state.user_name} type="text" placeholder="user name" name="user_name"/>
                <input onChange={this.handleInputChange} value={this.state.password}  type="password" placeholder="password" name="password"/>
                <input type="submit" value="submit"/>
                </form>
            </React.Fragment>
        )

    }
}