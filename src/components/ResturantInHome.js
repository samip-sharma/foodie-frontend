import React from 'react'



export default class RestaurantInHome extends React.Component{
    handleClick=(id)=>{
       localStorage.restaurant_id=id
       this.props.history.push("/show")

    }

    render(){
        return(
            <React.Fragment>
                <img onClick={()=>this.handleClick(this.props.restaurant.id)} className={"each-home-image"} src={this.props.restaurant.image_url} />
            </React.Fragment>
        )
    }
}