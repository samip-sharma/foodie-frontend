import React from 'react';
import FoodieNavbar from './FoodieNavbar';

class Profile extends React.Component {

    state = {
        user: [],
        friends: false,
        current_id:null
    }

    componentDidMount() {
        this.fetchUserFromBackend()
        this.fetchingFriendsList()
    }

    componentDidUpdate(){
        if (parseInt(this.state.current_id )!== parseInt(localStorage.clickedUser)){
            this.componentDidMount()
        }
    }

    fetchingFriendsList() {
        fetch(`http://localhost:3000/following/${localStorage.user_id}`,
        )
        .then(resp=>resp.json())
        .then((data)=>{
            if (data.length>0){
                if( data.filter((friend)=>parseInt(friend.id)===parseInt(localStorage.clickedUser)).length>0 ){
                    console.log("true")
                    console.log(data[0].id)
                    console.log(localStorage.clickedUser)
                    this.setState({
                        friends:true
                    })
                }
            }
            else{
                this.setState({
                    friends:false
                })
            }

            })
    }

    fetchUserFromBackend = () => {
        fetch(`http://localhost:3000/users/${localStorage.user_id}/${localStorage.clickedUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
                'Authorization': localStorage.token
            }
        }
        )
            .then(resp => resp.json())
            .then(data => {
                console.log(localStorage.clickedUser)
                console.log(data)
                this.setState({   
                user: data,
                current_id:data.id
            })}
            )
    }

    handleClick = (id) => {
        localStorage.restaurant_id = id
        this.props.history.push("/show")
    }

    handleAddFriend = () => {
        //   debugger

        //   console.log(localStorage.clickedUser)
        //   console.log(localStorage.user_id)
        this.setState({
            // friends: !this.state.friends
            friends: true
        })

        fetch(`http://localhost:3000/users/${localStorage.user_id}/addFriend/${localStorage.clickedUser}`)
            .then(resp => resp.json)
            .then(console.log)
    }

    handleDeleteFriend = () => {
        
        this.setState({
            // friends: !this.state.friends
            friends: false
        })
        
        fetch(`http://localhost:3000/users/${localStorage.user_id}/deleteFriend/${localStorage.clickedUser}`, {
            method: "DELETE"
        })
            .then(resp => resp.json)
            .then(console.log)
    }

    render() {
        
        let userRestaurants;
        if (this.state.user.restaurants) {
            userRestaurants = this.state.user.restaurants.map((restaurant) => <li onClick={ () => this.handleClick(restaurant.real_id) }> {restaurant.name} </li>)
        }

        let boolean=((localStorage.clickedUser!==localStorage.user_id) && (this.state.friends===false))
        let addOrRemoveBoolean=(this.state.friends===true && (localStorage.clickedUser!==localStorage.user_id))
        //will always be false^ 

        return(
            <div className="profile-page">
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history}/>
                <div className="profile-page-content">
                    <img className="profile-image" src="images/foodie-profile-pic.jpg" alt="profile-pic" />
                    <h1 className="profile-name">{ this.state.user.name }</h1>
                    <br></br>
                    <ul><h2 style={{color:"yellow", border:"solid white 2px", background:"red"}}>Liked Restaurants:</h2> <div className="liked-restaurants-list">{ userRestaurants }</div></ul>
                    {(boolean)?
                        <button onClick={this.handleAddFriend} >Add Friend</button>
                        :
                        null
                    }
                    {addOrRemoveBoolean? <button onClick={this.handleDeleteFriend}>Remove Friend</button>:null}
                </div>
            </div>
        )
    }

}

export default Profile