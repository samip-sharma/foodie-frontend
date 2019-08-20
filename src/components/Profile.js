import React from 'react';

class Profile extends React.Component {

    componentDidMount(){
        fetch(`http://localhost:3000/users/${id}`)
            .then(resp => resp.json())
            .then(console.log)
    }

    render() {
        
    }

}

export default Profile