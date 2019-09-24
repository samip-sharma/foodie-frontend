import React from "react";
import FoodieNavbar from './FoodieNavbar';
import {Form , FormControl, Button} from 'react-bootstrap'

export default class Friendlist extends React.Component{

    state = {
        friendList:[],
        userSearchTerm:"",
        allUsers:[]
    }

    handleSearchInput=(e)=>{
        this.setState({
            userSearchTerm:e.target.value
        })
    }

    componentDidMount() {
        fetch(`https://flatiron-foodie.herokuapp.com/following/${localStorage.user_id}`,
        )
        .then(resp => resp.json())
        .then((data) => {
                this.setState({
                    friendList:data
                })
            })

            fetch(`https://flatiron-foodie.herokuapp.com/users`,
            )
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        allUsers:data
                    })
                })
    }

    render() {
        let myFriends = this.state.friendList.map((friend) => {
            return <li onClick={ () => {
                localStorage.clickedUser = friend.id
                this.props.history.push("/profile")
            }}>
            {friend.name}</li>
        })

        let filteredUsers=this.state.allUsers.filter((user)=>{
            if (this.state.userSearchTerm!==""){
                return user.name.toLowerCase().includes(this.state.userSearchTerm.toLowerCase()) || user.user_name.toLowerCase().includes(this.state.userSearchTerm.toLowerCase())
            }
            return false
        })

        let userJsx=filteredUsers.map((user)=>{
               return <div className="searched-users" onClick={()=>{
                   localStorage.clickedUser=user.id 
                   this.props.history.push("/profile")}} >{user.name}</div>
            })
        
        return(
            <div className="friend-list">
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history} />
                <div className="friend-list-content">
                    <h2 style={{textDecoration:"underline"}}>My Followed Users</h2>
                    { myFriends }
                </div>
                <div className="friend-search">

                    <FormControl style={{width:"320px"}} className="user-search-form" type="text" onChange={this.handleSearchInput} value={this.state.userSearchTerm}  placeholder="Search Users.." />
                            {userJsx}
                </div>
            </div>
        )
    }
}