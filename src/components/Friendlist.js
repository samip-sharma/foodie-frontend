import React from "react"

export default class Friendlist extends React.Component{

    state={
        friendList:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/following/${localStorage.user_id}`,
        )
        .then(resp=>resp.json())
        .then((data)=>{
                this.setState({
                    friendList:data
                })
            })
    }
    render(){
        console.log(this.state.friendList[0])
        let arr=this.state.friendList.map((friend)=>{
            return <li>{friend.name}</li>
        })
        return(
            <React.Fragment>
                {arr}
            </React.Fragment>
        )
    }
}