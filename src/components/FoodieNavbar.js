import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';

class FoodieNavbar extends React.Component {

    state={
        searchTerm: ''
    }

    handleSearchInput = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault()
        this.props.history.push("/home")
        if (this.state.searchTerm !==
        "") this.props.handleSearchRestaurant(this.state.searchTerm)
    }

    handleHomeButton = () => {
        this.props.history.push("/home")
        this.props.handleSearchRestaurant("food")
    }

    handleFriendlistClick = () => {
        this.props.history.push("/friendlist")
    }

    handleProfileClick = () => {
        localStorage.clickedUser = localStorage.user_id
        this.props.history.push("/profile")
    }

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }
    
    render() {
        return(
            <div className="navbar-container">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Nav.Link onClick={ this.handleHomeButton }>Foodie</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={ this.handleProfileClick } href="#profile">My Profile</Nav.Link>
                            <Nav.Link onClick={ this.handleFriendlistClick } href="#friendlist">Friendlist</Nav.Link>
                            <button onClick={ this.handleLogout }>Logout</button>
                            </Nav>
                            <Form onSubmit={this.handleSearchSubmit}  inline>
                            <FormControl type="text" onChange={this.handleSearchInput} value={this.state.searchTerm}  placeholder="Search" className="mr-sm-2" />
                            <button>Search</button>
                            </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default FoodieNavbar