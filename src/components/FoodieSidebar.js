import React from 'react';

class FoodieSidebar extends React.Component {
  
  state = {
    likedRestaurants: []
  };

  componentDidMount() {
      fetch(`http://localhost:3000/getFavRestaurants/${localStorage.user_id}`)
      .then(resp => resp.json())
      .then((data) => {
              this.setState({
                  likedRestaurants: data
              })
          })
  }

handleClick=(id)=>{
  localStorage.restaurant_id = id
  this.props.history.push("/show")
}

  render(){
      console.log(this.state.likedRestaurants)
      let allLikedRestaurants = this.state.likedRestaurants.map((restaurant)=>{
          return <li onClick={ () => this.handleClick(restaurant.real_id) } >{ restaurant.name } </li>
      })

      //handleClick => needs to take in restaurant object

      return(
          <div className="side-bar">
              { allLikedRestaurants }
          </div>
      )
  }

}

export default FoodieSidebar