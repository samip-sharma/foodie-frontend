import React from 'react';
import RestaurantInHome from './ResturantInHome';
import FoodieNavbar from './FoodieNavbar';
import FoodieSidebar from './FoodieSidebar';
import HomeMap from './HomeMap';




export default class Home extends React.Component {
    
    componentDidMount() {
        fetch("https://localhost:3000/getFavRestaurants/2")
            .then(resp=>resp.json())
    }

    render() {
        let restaurants = this.props.AllRestaurant.map((restaurant) => {
            return <RestaurantInHome history={ this.props.history }  restaurant={restaurant} />
        })

        return(
            <React.Fragment>
            <FoodieNavbar handleSearchRestaurant={ this.props.handleSearchRestaurant } history={ this.props.history }/>
                <div className="home-container">
                    <HomeMap coordinates={this.props.coordinates} AllRestaurant={ this.props.AllRestaurant } history = { this.props.history }/>
                    <div className="home-images">
                    {localStorage.token ? restaurants : "LOGIN BUDDY"}
                    </div>
                </div>
            <FoodieSidebar history = { this.props.history } />
            </React.Fragment>
        )
    }
}