import React from 'react'


export default class RestaurantDetail extends React.Component{

    state={
        restaurant:{}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/getRestaurantDetail/${localStorage.id}`)
        .then(response=>response.json())
        .then((data)=> {
            this.setState({
                restaurant:{...data}
            })
        })  
    }

    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <img src={this.state.restaurant.image_url} />
                <h4>{this.state.restaurant.name}</h4>
            </React.Fragment>
        )
    }
}