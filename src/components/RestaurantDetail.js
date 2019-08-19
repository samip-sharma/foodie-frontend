import React from 'react'
import FoodieNavbar from './FoodieNavbar'


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

    handleLike=()=>{
        console.log("like")
    }

    render(){
        const {name, categories, rating, price, location, display_phone} = this.state.restaurant

        let displayCategories;
        let displayAddress;
        if (this.state.restaurant.length!==0){
            console.log(this.state.restaurant)
            displayCategories = categories.map(category => <span>~{category.title}~ </span>);
            displayAddress = location.display_address.join(", ");
        }

        return(
            <React.Fragment>
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history}/>
                <img alt={ this.state.restaurant.name } className="restaurant-detail-image" src={ this.state.restaurant.image_url } />
                <h4>{ name }</h4>
                <p>Address: { displayAddress }</p>
                <p>Phone: { display_phone } </p>
                <p>Rating: { rating}</p>
                <p>{ price }</p>
                <p>Categories: { displayCategories }</p>
                <button onClick={ this.handleLike } >Favorite</button>
                <br></br>
                <br></br>
                <label>Add a Review: </label>
                <br></br>
                <textarea></textarea>
                <br></br>
                <input type="submit" />
            </React.Fragment>
        )
    }
}