import React from  'react'

export default class UsersThatLikedRestaurant extends React.Component{

    componentDidMount(){
        fetch(`http://localhost:3000/restaurants/${localStorage.restaurant_id}/users`,{
            method:'GET',
            headers:{
                "Accepts":"Application/json",
                'Content-Type':"application/json",
                "Authorization":localStorage.token
            }
        })
        .then(resp=>resp.json())
        .then(console.log)
    }

    render (){
        return(
            <div>users</div>
        )
    }
}