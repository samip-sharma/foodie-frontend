import React from  'react'

export default class UsersThatLikedRestaurant extends React.Component{

    render () {
        let arr
        if (this.props.usersLiked){
        arr = this.props.usersLiked.map((user)=>{
            return <span><button 
            className="restaurant-user-button"
            onClick={()=>{
            localStorage.clickedUser=user.id 
            this.props.history.push("/profile")
            }}>{user.name}</button></span>
        }
        )}
        return(
            <div style={{textDecoration:"underline"}}>Users who liked this restaurant:{arr}</div>
        )
    }
}