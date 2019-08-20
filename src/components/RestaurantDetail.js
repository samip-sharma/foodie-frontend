import React from 'react'
import FoodieNavbar from './FoodieNavbar'
import RestaurantComments from './RestaurantComments'
import Map from './Map'
import UsersThatLikedRestaurant from './UsersThatLikedRestaurant'


export default class RestaurantDetail extends React.Component{

    state={
        restaurant:[],
        liked:false,
        commentText:'',
        comments:[]
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
            {user_id:localStorage.user_id}
            )
          })
        .then(response=>response.json())
        .then((data)=> {
            // console.log(data)
            this.setState({
                liked:data.liked,
                restaurant:{...data}
            })
        })  



        fetch("http://localhost:3000/getComments",{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            "Accepts":"application/json",
            "Authorization":localStorage.token
            },
            body:JSON.stringify(
            {user_id:localStorage.user_id,
             restaurant_id:localStorage.restaurant_id
            }
            )
          })
          .then(resp=>resp.json())
          .then((data)=>{
            //   console.log(data)
              this.setState({
                comments:data
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
            restaurant_id:localStorage.restaurant_id,
            restaurant_name:this.state.restaurant.name}
            )
        }).then(()=>{
            this.setState({
                liked:!this.state.liked
            })
        })
    }


    handleCommentSubmit=()=>{
        fetch('http://localhost:3000/addComments',{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            "Accepts":"application/json",
            "Authorization":localStorage.token
            },
            body:JSON.stringify(
            {user_id:localStorage.user_id,
            restaurant_id:localStorage.restaurant_id,
            context:this.state.commentText,
            restaurant_name:this.state.restaurant.name}
            )
          })
          .then(resp=>(resp.json()))
          .then((data)=>{

            if (this.state.comments.length > 0){
              this.setState({
                  comments:[...this.state.comments,data]
              })
            }else{
                this.setState({
                    comments:[data]
                }) 
            }
          })
    }

    handleCommentTypeChange=(e)=>{
        this.setState({
            commentText:e.target.value
        })
    }


    render(){
        const {name, categories, rating, price, location, display_phone} = this.state.restaurant

        let displayCategories;
        let displayAddress;
        if (this.state.restaurant.length!==0){
            // console.log(this.state.restaurant)
            displayCategories = categories.map(category => <span>~{category.title}~ </span>);
            displayAddress = location.display_address.join(", ");
        }

        return(
            <React.Fragment>
                <FoodieNavbar handleSearchRestaurant={this.props.handleSearchRestaurant} history={this.props.history}/>
                <div className="restaurant-detail">
                <img alt={ this.state.restaurant.name } className="restaurant-detail-image" src={ this.state.restaurant.image_url } />
                <h4>{ name }</h4>
                <p>Address: { displayAddress }</p>
                <p>Phone: { display_phone } </p>
                <p>Rating: { rating}</p>
                <p>{ price }</p>
                <p>Categories: { displayCategories }</p>
                <button onClick={ this.handleLike } >{this.state.liked? "Unfav" : "fav"}</button>
                <br></br>
                <br></br>
                <UsersThatLikedRestaurant />
                <RestaurantComments comments={this.state.comments}/>
                <label>Add a Review: </label>
                <br></br>
                <textarea value={this.state.commentText} onChange={this.handleCommentTypeChange}></textarea>
                <br></br>
                <input type="submit" onClick={this.handleCommentSubmit} />
                <Map coordinates={this.state.restaurant.coordinates}/>
                </div>
            </React.Fragment>
        )
    }
}