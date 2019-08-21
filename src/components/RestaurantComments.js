import React from 'react'

export default class RestaurantComments extends React.Component{
   

    render(){
        let arr
        if(this.props.comments.length>0){
             arr=this.props.comments.map((comment)=>{
                return <p> <span> {comment.user.name}: </span> {comment.context}</p>
            })
        }
        return(
            <div className="restaurant-comments">
                Comments for this Restaurant
                {arr}
            </div>
        )
    }
}