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
        comments:[],
        usersLiked:[]
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

        this.handleUsersLikeList()


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


    handleUsersLikeList=()=>{

        fetch(`http://localhost:3000/restaurants/${localStorage.restaurant_id}/users`,{
            method:'GET',
            headers:{
                "Accepts":"Application/json",
                'Content-Type':"application/json",
                "Authorization":localStorage.token
            }
        })
        .then(resp=>resp.json())
        .then((data)=>{
            this.setState({
                usersLiked:data
            })
        })

    }

    handleLike=()=>{
        
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
            this.handleUsersLikeList()
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
                <UsersThatLikedRestaurant history={this.props.history} usersLiked={this.state.usersLiked}/>
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