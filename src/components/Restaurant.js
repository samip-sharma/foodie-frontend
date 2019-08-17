import React from 'react'



export default class Restaurant extends React.Component{

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <img onClick={this.handleClick} className={"each-home-image"} src={this.props.restaurant.image_url} />
            </React.Fragment>
        )
    }
}