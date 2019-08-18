import React from 'react'


export default class RestaurantDetail extends React.Component{

    state={
        restaurant:{}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/getRestaurantDetail/${localStorage.restaurant_id}`)
        .then(response=>response.json())
        .then((data)=> {
            this.setState({
                restaurant:{...data}
            })
        })  
    }

    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <img className="restaurant-detail-image" src={this.state.restaurant.image_url} />
                <h4>{this.state.restaurant.name}</h4>
            </React.Fragment>
        )
    }
}