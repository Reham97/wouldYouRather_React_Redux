import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { logout, changeCurrentPage } from '../actions/actions'
import { connect } from 'react-redux'
import { Navbar, Button, Form, Nav } from 'react-bootstrap'

const NavBar = (props) => {
    const history = useHistory();

    const renderList = () => {
        if (props.user) {
            return [
                <Form className="d-flex">
                    <Navbar.Text style={{color:"white"}} >
                    Hi, {props.user.name}
                          </Navbar.Text>
                    <img variant="top" src={props.user.avatarURL} style={{ height: '2rem' , margin:"0.5rem 0.5rem 0rem 0.5rem "}} />
                    <Button
                        variant="primary"
                        onClick={e => {
                            e.preventDefault();
                            props.logout();
                            history.push("/log");
                        }}
                    >Log out</Button>{' '}
                </Form>
            ]
        }
    }


    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link>
                        <NavLink to="/" className={props.currentPage==="home" && `activeTab`} onClick={()=>{props.changeCurrentPage("home")}}>
                            Home</NavLink>
                        </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/add" className={props.currentPage==="newQuestions" && `activeTab`} onClick={()=>{props.changeCurrentPage("newQuestions")}}>
                            New Question</NavLink>
                        </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/leaderBoard" className={props.currentPage==="leaderBoard" && `activeTab`} onClick={()=>{props.changeCurrentPage("leaderBoard")}}>
                            Leader Board</NavLink>
                        </Nav.Link>


                </Nav>
            </Navbar.Collapse>

            {renderList()}

        </Navbar>

    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        currentPage: state.currentPage
    }
}
const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout()),
        changeCurrentPage: (page) => dispatch(changeCurrentPage(page))
    }
}
export default connect(mapStateToProps, mapDispatch)(NavBar)