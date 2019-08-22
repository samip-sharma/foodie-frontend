import React from 'react'

export default class RestaurantComments extends React.Component{
   
    
    handleDeleteButton = (comment) => {
        this.props.handleDeleteComment(comment)
    }
    
    render(){
        let allComments
        console.log(this.props.comments)
        if(this.props.comments.length > 0){
            allComments = this.props.comments.map((comment)=>{
                return <div><p> <span> {comment.user.name}: </span> {comment.context}
                <br></br>
                {parseInt(comment.user.id) === parseInt(localStorage.user_id) ?
                    <button onClick={()=> this.handleDeleteButton(comment) }>X</button> :
                    null
                }
                </p>
                </div>
            })
        }
        return(
            <div className="restaurant-comments">
                Comments for this Restaurant:
                {allComments}
            </div>
        )
    }
}