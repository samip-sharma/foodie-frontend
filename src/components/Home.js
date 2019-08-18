import React from 'react'
import RestaurantInHome from './ResturantInHome'
import FoodieNavbar from './FoodieNavbar'



export default class Home extends React.Component{
    componentDidMount(){
        fetch("https://localhost:3000/getFavRestaurants/1")
        .then(resp=>resp.json())
        .then(console.log)
    }

    render(){
        let arr=this.props.AllRestaurant.map((restaurant)=>{
            return <RestaurantInHome history={this.props.history}  restaurant={restaurant} />
        })
        return(
            <React.Fragment>
            <FoodieNavbar />
                {localStorage.token ? arr : "Dont be too smart"}
            </React.Fragment>
        )
    }
}