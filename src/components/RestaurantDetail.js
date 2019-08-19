import React from 'react'


export default class RestaurantDetail extends React.Component{

    state={
        restaurant:[]
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
        const {name,categories,rating,price}=this.state.restaurant
        let displayCategories
        if (this.state.restaurant.length!==0){
            console.log(this.state.restaurant)
            displayCategories = categories.map(category => <span>{category.title}, </span>)
        }
        return(
            <React.Fragment>
                <img alt={this.state.restaurant.name} className="restaurant-detail-image" src={this.state.restaurant.image_url} />
                <h4>{name}</h4>
                <p>Rating: { rating}</p>
                <p>{ price }</p>
                <p>Categories: { displayCategories }</p>
            </React.Fragment>
        )
    }
}