import React from 'react';


export default class RestaurantInHome extends React.Component{
    
    handleClick = (id) => {
       localStorage.restaurant_id = id
       this.props.history.push("/show")
    }

    render(){
        return(
            <div className="home-each-image">
                <img alt={ this.props.restaurant.name } onClick={() => this.handleClick(this.props.restaurant.id)} className={"each-home-image"} src={this.props.restaurant.image_url} />
                <div className="image-caption">{this.props.restaurant.name.slice(0,20)}</div>
            </div>
        )
    }
}
{/* <p>{this.props.restaurant.name}</p> */}