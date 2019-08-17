import React from 'react'
import RestaurantInHome from './ResturantInHome'



export default class Home extends React.Component{
    render(){
        let arr=this.props.AllRestaurant.map((restaurant)=>{
            return <RestaurantInHome history={this.props.history}  restaurant={restaurant} />
        })
        return(
            <React.Fragment>
                {localStorage.token ? arr : "Dont be too smart"}
            </React.Fragment>
        )
    }
}