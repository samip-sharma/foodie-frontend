import React from  'react'

export default class UsersThatLikedRestaurant extends React.Component{


    render () {
        let arr
        if (this.props.usersLiked.length>0){
         arr=this.props.usersLiked.map((user)=>{
             console.log(user)
            return <span onClick={()=>{
                localStorage.clickedUser=user.id 
                this.props.history.push("/profile")
            }}>{user.name},</span>
         }
         )}
        return(
            <div>who liked this restaurant:{arr}</div>
        )
    }
}