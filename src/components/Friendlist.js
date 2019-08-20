import React from "react"

export default class Friendlist extends React.Component{

    state={
        friendList:[]
    }

    handleCLick=()=>{
        
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

            return <li onClick={this.handleClick}>{friend.name}</li>
        })
        return(
            <React.Fragment>
                <div>My friends</div>
                {arr}
            </React.Fragment>
        )
    }
}