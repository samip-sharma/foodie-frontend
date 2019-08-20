import React from 'react';
import Friendlist from './Friendlist';
import FoodieNavbar from './FoodieNavbar';

class Profile extends React.Component {

    state = {
        user: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${localStorage.clickedUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
                'Authorization': localStorage.token
            }
        }
        )
            .then(resp => resp.json())
            .then(data => this.setState({
                user: data
            })
            )
    }

    handleClick=(id)=>{
        localStorage.restaurant_id = id
        this.props.history.push("/show")
      }

    render() {
        
        let userRestaurants;
        if (this.state.user.restaurants) {
            userRestaurants = this.state.user.restaurants.map((restaurant) => <li onClick={ () => this.handleClick(restaurant.real_id) }> {restaurant.name} </li>)
        }

        return(
            <React.Fragment>
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history}/>
                <div className="profile-page">
                    <h1>{ this.state.user.name }</h1>
                    <br></br>
                    <ul>Liked Restaurants: { userRestaurants }</ul>
                    <Friendlist />
                </div>
            </React.Fragment>
        )
    }

}

export default Profile