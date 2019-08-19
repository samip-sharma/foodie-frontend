import React from 'react';

class FoodieSidebar extends React.Component {
  
  state = {
    likedRestaurants: []
  };

  componentDidMount(){
      fetch(`http://localhost:3000/getFavRestaurants/${localStorage.user_id}`)
      .then(resp => resp.json())
      .then((data) => {
              this.setState({
                  likedRestaurants: data
              })
          })
  }

//   componentDidMount(){
//     fetch(`http://localhost:3000/getFavRestaurants/${localStorage.restaurant_id}`,{
//         method:"POST",
//         headers:{
//         "Content-Type":"application/json",
//         "Accepts":"application/json",
//         "Authorization":localStorage.token
//         },
//         body:JSON.stringify(
//         {user_id: localStorage.user_id,
//         Authorization: localStorage.token}
//         )
//       })
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data)
//         this.setState({
//             likedRestaurants: {...data}
//         })
//     })  
// }

  render(){
      console.log(this.state.likedRestaurants)
      let allLikedRestaurants = this.state.likedRestaurants.map((restaurant)=>{
          return <li>{ restaurant.name }</li>
      })

      return(
          <div className="side-bar">
              {allLikedRestaurants}
          </div>
      )
  }

}

export default FoodieSidebar