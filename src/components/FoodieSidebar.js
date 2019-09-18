import React from 'react';

class FoodieSidebar extends React.Component {
  
  state = {
    likedRestaurants: []
  }

  componentDidMount() {
      fetch(`http://localhost:3000/getFavRestaurants/${localStorage.user_id}`)
      .then(resp => resp.json())
      .then((data) => {
              this.setState({
                  likedRestaurants: data
              })
          })
  }

handleClick = (id) => {
  localStorage.restaurant_id = id
  this.props.history.push("/show")
}

  render() {
      let allLikedRestaurants;
      if(this.state.likedRestaurants.length > 0){
            allLikedRestaurants = this.state.likedRestaurants.map((restaurant)=>{
              return <li onClick={ () => this.handleClick(restaurant.real_id) } >{ restaurant.name } </li>
            })
      }
      
      return(
          <div className="side-bar">
            <h4>Your Favorite Restaurants</h4>
            <br></br>
            <br></br>
              { allLikedRestaurants }
          </div>
      )
  }

}

export default FoodieSidebar