import React from "react";
import FoodieNavbar from './FoodieNavbar';

export default class Friendlist extends React.Component{

    state = {
        friendList:[]
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
    }

    render() {
        let myFriends = this.state.friendList.map((friend) => {
            return <li onClick={ () => {
                localStorage.clickedUser = friend.id
                this.props.history.push("/profile")
            }}>
            {friend.name}</li>
        })
        
        return(
            <div className="friend-list">
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history} />
                <div className="friend-list-content">
                    <h2 style={{textDecoration:"underline"}}>My friends</h2>
                    { myFriends }
                </div>
            </div>
        )
    }
}