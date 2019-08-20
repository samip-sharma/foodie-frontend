import React from 'react'



export default class RestaurantInHome extends React.Component{
    
    handleClick = (id) => {
       localStorage.restaurant_id = id
       this.props.history.push("/show")
    }

    render(){
        return(
            <span>
                <img alt={ this.props.restaurant.name } onClick={() => this.handleClick(this.props.restaurant.id)} className={"each-home-image"} src={this.props.restaurant.image_url} />
            </span>
        )
    }
}
{/* <p>{this.props.restaurant.name}</p> */}