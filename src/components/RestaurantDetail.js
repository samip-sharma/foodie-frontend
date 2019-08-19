import React from 'react'


export default class RestaurantDetail extends React.Component{

    state={
        restaurant:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/getRestaurantDetail/${localStorage.restaurant_id}`,{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            "Accepts":"application/json",
            "Authorization":localStorage.token
            },
            body:JSON.stringify(
            {user_id:localStorage.user_id,
            Authorization:localStorage.token}
            )
          })
        .then(response=>response.json())
        .then((data)=> {
            console.log(data)
            this.setState({
                restaurant:{...data}
            })
        })  
    }

    handleLike=()=>{
        console.log("like")
        fetch(`http://localhost:3000/addlike`,{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            "Accepts":"application/json",
            "Authorization":localStorage.token
            },
            body:JSON.stringify(
            {user_id:localStorage.user_id,
            restaurant_id:localStorage.restaurant_id}
            )
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
                <button onClick={this.handleLike} >Favorite</button>
            </React.Fragment>
        )
    }
}