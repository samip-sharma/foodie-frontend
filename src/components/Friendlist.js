import React from "react"

export default class Friendlist extends React.Component{
    componentDidMount(){
        fetch(`http://localhost:3000/following/${localStorage.user_id}`)
        .then(resp=>resp.json())
        .then(console.log)
    }
    render(){
        return(
            <React.Fragment>
                asdf
            </React.Fragment>
        )
    }
}