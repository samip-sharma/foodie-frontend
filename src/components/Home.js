import React from 'react'
import Restaurant from './Restaurant'



export default class Home extends React.Component{
    render(){
        let arr=this.props.AllRestaurant.map((restaurant)=>{
            return <Restaurant restaurant={restaurant} />
        })
        return(
            <React.Fragment>
                {localStorage.token ? arr : "Dont be too smart"}
            </React.Fragment>
        )
    }
}