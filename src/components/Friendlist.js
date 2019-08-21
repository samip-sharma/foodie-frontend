import React from "react";
import FoodieNavbar from './FoodieNavbar';

export default class Friendlist extends React.Component{

    state = {
        friendList:[]
    }

    componentDidMount() {
        fetch(`http://localhost:3000/following/${localStorage.user_id}`,
        )
        .then(resp=>resp.json())
        .then((data)=>{
                this.setState({
                    friendList:data
                })
            })
    }
    render() {
        console.log(this.state.friendList[0])
        let arr = this.state.friendList.map((friend) => {
            return <li onClick={ () => {
                localStorage.clickedUser = friend.id
                this.props.history.push("/profile")
            }}>
            {friend.name}</li>
        })
        
        return(
            <React.Fragment>
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history} />
                <div className="friends-list">My friends
                    {arr}
                </div>
            </React.Fragment>
        )
    }
}